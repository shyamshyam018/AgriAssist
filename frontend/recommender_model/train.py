# Importing required libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
import pickle

# Step 1: Load the dataset
df = pd.read_csv("indiancrop_dataset.csv")

# Step 2: Data Preprocessing
# Drop unnecessary columns like 'STATE', if present
if 'STATE' in df.columns:
    df.drop(['STATE'], axis=1, inplace=True)

# Identify non-numeric columns and encode them
for column in df.columns:
    if df[column].dtype == 'object':  # Check if column type is object (string)
        le = LabelEncoder()
        df[column] = le.fit_transform(df[column])

# Step 3: Feature-target split
X = df.iloc[:, :-1]  # Features (N_SOIL, P_SOIL, K_SOIL, etc.)
y = df.iloc[:, -1]   # Target (CROP)

# Step 4: Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Step 5: Train the Naive Bayes model
model = GaussianNB()
model.fit(X_train, y_train)

# Step 6: Evaluate the model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Step 7: Save the trained model
pickle.dump(model, open("trained_model.sav", "wb"))

# Save the label encoder for decoding predictions
with open("label_encoder.pkl", "wb") as file:
    pickle.dump(le, file)

print("Model and Label Encoder saved successfully.")
