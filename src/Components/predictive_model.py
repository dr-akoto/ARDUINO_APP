import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load dataset (sensor + satellite data)
data = pd.read_csv('deforestation_data.csv')

# Preprocessing
X = data[['temperature', 'humidity', 'forest_cover']]
y = data['deforestation_risk']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

# Save model to a file
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

