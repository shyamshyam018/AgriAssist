from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Load the trained model and label encoder
model = pickle.load(open("trained_model.sav", "rb"))
label_encoder = pickle.load(open("label_encoder.pkl", "rb"))

# Sample of dynamic fields (could be retrieved from a database or defined statically)
dynamic_fields = [
    {"name": "N_SOIL", "label": "Nitrogen in Soil", "type": "number"},
    {"name": "P_SOIL", "label": "Phosphorus in Soil", "type": "number"},
    {"name": "K_SOIL", "label": "Potassium in Soil", "type": "number"},
    {"name": "TEMPERATURE", "label": "Temperature", "type": "number"},
    {"name": "HUMIDITY", "label": "Humidity", "type": "number"},
    {"name": "ph", "label": "pH Level", "type": "number"},
    {"name": "RAINFALL", "label": "Rainfall", "type": "number"},
    {"name": "CROP_PRICE", "label": "Crop Price", "type": "number"},
]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        # Ensure all dynamic fields are in the request and contain valid numeric data
        features = []
        for field in dynamic_fields:
            if field['name'] not in data:
                return jsonify({'error': f'Missing field: {field["name"]}'}), 400
            try:
                features.append(float(data[field['name']]))
            except ValueError:
                return jsonify({'error': f'Invalid value for {field["name"]}'}), 400

        # Convert to numpy array and reshape for prediction
        features = np.array(features).reshape(1, -1)

        # Predict using the model
        prediction = model.predict(features)

        # Decode the predicted label (crop)
        predicted_label = label_encoder.inverse_transform(prediction)[0]

        # Return the prediction as a JSON response
        return jsonify({'predicted_crop': predicted_label})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
