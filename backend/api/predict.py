from flask import Flask, request, jsonify
import pickle
import json
import re
import os
from dotenv import load_dotenv
from flask_cors import CORS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate

app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

base_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(base_dir, 'final_rf_model.pkl')

# Load the trained disease prediction model
with open(model_path, 'rb') as f:
    disease_model = pickle.load(f)

# Load the encoder used during training (assuming it's OneHotEncoder)
with open(os.path.join(base_dir, 'encoder.pkl'), 'rb') as f:
    encoder = pickle.load(f)

# Initialize the language model for symptom extraction
llm = ChatGoogleGenerativeAI(model='gemini-pro', google_api_key=GOOGLE_API_KEY)

# Define the list of possible symptoms
symptom_list = [
    "fever", "cough", "fatigue", "shortness of breath", "headache",
    "muscle aches", "sore throat", "loss of taste", "nausea", "vomiting",
    "diarrhea", "chills", "congestion", "runny nose", "body aches",
    "rash", "joint pain"
]

# Create a prompt template for symptom extraction
prompt_template = PromptTemplate(
    input_variables=["query"],
    template=(
        "Given the query: '{query}', extract the symptoms from the following list and return them in valid JSON format:\n"
        "Symptom List: {symptom_list}\n"
        "Output should be in the following format:\n"
        '{{ "symptoms": ["symptom1", "symptom2", ...] }}'
    )
)

def extract_symptoms(description):
    prompt = prompt_template.format(query=description, symptom_list=', '.join(symptom_list))
    print(f"Prompt sent to the model: {prompt}")
    
    result = llm.invoke(prompt)
    
    print(f"Model Response: {result.content}")

    try:
        raw_json = result.content.strip()
        print(f"Raw JSON Response: {raw_json}")
        raw_json = raw_json.replace("'", '"')
        raw_json = re.sub(r'(\w+):', r'"\1":', raw_json)
        symptoms = json.loads(raw_json)
        return symptoms.get("symptoms", [])
    except (json.JSONDecodeError, ValueError) as e:
        print(f"Failed to parse JSON: {raw_json}, Error: {str(e)}")
        return []

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    description = data.get('description')

    if not description:
        return jsonify({"error": "Description is required"}), 400

    symptoms = extract_symptoms(description)

    # Handle empty symptoms list
    if not symptoms:
        return jsonify({"error": "No valid symptoms extracted"}), 400

    try:
        # Transform the symptoms into a format suitable for the model
        symptoms_encoded = encoder.transform([symptoms])  # This will create a 2D array

        # Ensure to flatten the array only when calling predict
        symptoms_flat = symptoms_encoded.toarray()  # This keeps it as 2D
        print(f"Encoded Symptoms Shape: {symptoms_encoded.shape}")  # Log the shape of the 2D array

        # Make the prediction with the correct input shape
        predicted_disease = disease_model.predict(symptoms_flat)  # Pass the 2D array directly

        return jsonify({'predicted_disease': predicted_disease[0]})
    except Exception as e:
        return jsonify({"error": "Prediction failed: " + str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000)
