import requests
import json
api_key = "2ab61f50b11d43128894c44592905cd4"
input_claim = "Trump won the 2020 elections."

# Define the endpoint (url) with the claim formatted as part of it, api-key (api-key is sent as an extra header)
api_endpoint = f"https://idir.uta.edu/claimbuster/api/v2/score/text/{input_claim}"
request_headers = {"x-api-key": api_key}


# Send the GET request to the API and store the api response
api_response = requests.get(url=api_endpoint, headers=request_headers)

# Extract the score from the JSON response
response_data = api_response.json()
score = response_data['results'][0]['score'] #if response_data['results'] else None

print(f"Score: {score}")

threshold = 0.5  

if score is not None:
    is_false_claim = score > threshold  # This logic depends on the meaning of the score
    print("False Claim" if is_false_claim else "True Claim")
else:
    print("No score available to determine the claim.")

# Print out the JSON payload the API sent back
print(api_response.json())