# Import Flask and necessary utilities for building a web API
from flask import Flask, request, jsonify
import pickle  # For loading the saved model
import numpy as np  # For handling numeric data

app = Flask(__name__)  # Initialize Flask app

# Load the pre-trained model from the file
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Define an API route to make predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data from the POST request (sent as JSON)
    data = request.get_json(force=True)
    
    # Extract features from the JSON request
    temperature = data['temperature']
    humidity = data['humidity']
    forest_cover = data['forest_cover']
    
   
# Continuing from the previous block...
    
    # Reshape input data for model prediction (single sample, 3 features)
    features = np.array([[temperature, humidity, forest_cover]])
    
    # Make a prediction using the pre-trained model
    prediction = model.predict(features)[0]
    
    # Return the prediction result as a JSON response
    return jsonify({
        'deforestation_risk': prediction
    })

# Start the Flask app on the specified port (default: 5000)
if __name__ == '__main__':
    app.run(debug=True)
