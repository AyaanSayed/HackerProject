document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    detectFakeProfile(username);
  });
  
  function detectFakeProfile(username) {
    // Here you would send an AJAX request to the backend for profile detection
    // In this example, let's assume the backend returns a simple response
    var fakeProbability = Math.random(); // Placeholder for backend response
    displayResult(username, fakeProbability);
  }
  
  function displayResult(username, fakeProbability) {
    var resultElement = document.getElementById("result");
    var resultMessage;
    if (fakeProbability < 0.5) {
      resultMessage = "Profile '" + username + "' appears to be genuine.";
    } else {
      resultMessage = "Profile '" + username + "' might be fake.";
    }
    resultElement.textContent = resultMessage;
  }
  