document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    detectFakeProfile(username);
  });
  
  function detectFakeProfile(username) {
    // Simulate detection process (replace with actual backend call)
    var isFake = Math.random() > 0.5; // Simulate 50% chance of being fake
    displayResult(username, isFake);
  }
  
  function displayResult(username, isFake) {
    var resultElement = document.getElementById("result");
    var resultMessage;
    if (isFake) {
      resultMessage = "Profile '" + username + "' is likely fake. Please report it.";
    } else {
      resultMessage = "Profile '" + username + "' appears to be genuine.";
    }
    resultElement.textContent = resultMessage;
  }
  