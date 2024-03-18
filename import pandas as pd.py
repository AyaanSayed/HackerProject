import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

# Load dataset (Assuming the dataset contains features and labels where 1 indicates fake and 0 indicates genuine)
data = pd.read_csv('social_media_profiles.csv')

# Split data into features and labels
X = data.drop(columns=['label'])  # Features
y = data['label']  # Labels

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train a Random Forest classifier
classifier = RandomForestClassifier(n_estimators=100, random_state=42)
classifier.fit(X_train, y_train)

# Make predictions
y_pred = classifier.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

# Confusion matrix
conf_matrix = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(conf_matrix)

# Example of using the model for prediction
def predict_profile(profile_features):
    """
    Function to predict if a social media profile is fake or genuine.
    Input: profile_features - a dictionary containing profile features
    Output: prediction (1 for fake, 0 for genuine)
    """
    profile_df = pd.DataFrame([profile_features])
    prediction = classifier.predict(profile_df)
    return prediction[0]

# Example usage
sample_profile = {
    'num_friends': 500,
    'num_followers': 1000,
    'post_frequency': 5,
    'has_profile_picture': 1,
    'has_bio': 1,
    'average_post_likes': 50
}

prediction = predict_profile(sample_profile)
if prediction == 1:
    print("Fake profile detected.")
else:
    print("Genuine profile.")