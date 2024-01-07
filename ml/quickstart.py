from flask import Flask, request, jsonify
import os
from azure.ai.contentsafety import ContentSafetyClient
from azure.core.credentials import AzureKeyCredential
from azure.core.exceptions import HttpResponseError
from azure.ai.contentsafety.models import AnalyzeTextOptions
import hashlib

app = Flask(__name__)

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

@app.route('/analyze-text', methods=['POST'])
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
                analysis = analyze_text(text)
                batch_results.append({"hash": text_hash, "text": text, "analysis": analysis})
            except HttpResponseError as e:
                batch_results.append({"hash": text_hash, "text": text, "error": str(e)})
        all_results.extend(batch_results)

    return jsonify(all_results)



if __name__ == '__main__':
    app.run(debug=True)

