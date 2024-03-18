import sys
import joblib

# Load the pre-trained model
model = joblib.load('fake_profile_detection_model.pkl')

# Define the number of features
num_features = 10  # Assuming you have 10 features

# Function to extract features from the username or profile
def extract_features(username):
    # Implement feature extraction logic here
    # For example, calculate posting frequency, account age, etc.
    # Return a list of features
    features = [0.5] * num_features  # Placeholder for feature extraction
    return features

# Get username from command line argument
username = sys.argv[1]

# Extract features from the username
features = extract_features(username)

# Predict using the pre-trained model
prediction = model.predict_proba([features])[0][1]

# Print the prediction (probability of being fake)
print(prediction)
