from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
from azure.ai.contentsafety import ContentSafetyClient
from azure.core.credentials import AzureKeyCredential
from azure.core.exceptions import HttpResponseError
from azure.ai.contentsafety.models import AnalyzeTextOptions
import hashlib
import requests

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_SUPPORTS_CREDENTIALS'] = True
CORS(app)

# Function generates a SHA-256 has for the given text
def generate_hash(text):
    sha256_hash = hashlib.sha256()
    sha256_hash.update(text.encode('utf-8'))
    return sha256_hash.hexdigest()

# Function batches of upto 10 texts
def batch_texts(texts, batch_size=10):
    for i in range(0, len(texts), batch_size):
        yield texts[i:i + batch_size]


# Function analyzes text using Azure Content Safety API
def analyze_text(text):
    key = os.environ["CONTENT_SAFETY_KEY"]
    endpoint = os.environ["CONTENT_SAFETY_ENDPOINT"]
    client = ContentSafetyClient(endpoint, AzureKeyCredential(key))
    request_options = AnalyzeTextOptions(text=text)
    
    try:
        response = client.analyze_text(request_options)
        results = []
        for category_analysis in response.categories_analysis:

                results.append({
                    'category': category_analysis.category,
                    'severity': category_analysis.severity
                })
        return results
    except HttpResponseError as e:
        raise e
    
# Analyze claims and return False if they are false
def analyze_with_claimbusters(text):
    api_key = '2ab61f50b11d43128894c44592905cd4'
    api_endpoint = f"https://idir.uta.edu/claimbuster/api/v2/query/fact_matcher/{text}"
    request_headers = {"x-api-key": api_key}

    try:
        api_response = requests.get(url=api_endpoint, headers=request_headers)
        if api_response.status_code == 200:
            response_data = api_response.json()
            justifications = response_data.get('justification', [])

            if not justifications:
                return "Not Enough Information for ClaimBusters API"

            for item in justifications:
                if item.get("truth_rating") in ["False","Fake","Pants on Fire","FALSE"]:
                    return False

            return True
        else:
            return {"error": "Failed to get response from ClaimBusters API", "status_code": api_response.status_code}
    except requests.RequestException as e:
        return {"error": str(e)}



@app.route('/analyze-text', methods=['POST'])
@cross_origin()
# API endpoint to receive text and return analysis
def get_texts():
    data = request.json
    texts = data.get('texts')
    if not texts or not isinstance(texts, list):
        return jsonify({"error": "No texts provided or incorrect format"}), 400

    all_results = []
    for batch in batch_texts(texts):
        batch_results = []
        for text in batch:
            text_hash = generate_hash(text)
            try:
                azure_analysis = analyze_text(text)
                claimbusters_result = analyze_with_claimbusters(text)
                batch_results.append({
                    "hash": text_hash, 
                    "text": text, 
                    "azure_analysis": azure_analysis,
                    "claimbusters_analysis": claimbusters_result
                })
            except HttpResponseError as e:
                batch_results.append({"hash": text_hash, "text": text, "error": str(e)})
        all_results.extend(batch_results)

    return jsonify(all_results)


if __name__ == '__main__':
    app.run(debug=True)
