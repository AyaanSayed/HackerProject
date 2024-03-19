def detect_fake_profile(followers, following, account_age, profile_picture, bio):
    # Define thresholds for determining fake profiles
    follower_threshold = 1000
    following_threshold = 500
    account_age_threshold = 365
    profile_picture_threshold = 1  # 1 for Yes, 0 for No
    bio_threshold = 1  # 1 for Yes, 0 for No

    # Check if the profile meets the criteria for being fake
    if (followers < follower_threshold and
        following < following_threshold and
        account_age < account_age_threshold and
        profile_picture == profile_picture_threshold and
        bio == bio_threshold):
        return "Fake"
    else:
        return "Real"

# Example usage:
followers = 800
following = 300
account_age = 250
profile_picture = 0  # No profile picture
bio = 1  # Has a biography

result = detect_fake_profile(followers, following, account_age, profile_picture, bio)
print("Profile is:", result)
