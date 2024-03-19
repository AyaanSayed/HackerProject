const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint for fake profile detection
app.post("/detectFakeProfile", (req, res) => {
  const username = req.body.username;
  
  console.log("Received detection request for username:", username);

  // Check if the username is "Nikesh Purohit"
  if (username === "Nikesh Purohit") {
    console.log("Profile is genuine.");
    res.json({ username, isFake: false }); // Profile is genuine
  } else {
    console.log("Profile is being detected.");
    // Implement your detection algorithm here (placeholder)
    const isFake = Math.random() > 0.5; // Placeholder for demonstration
    res.json({ username, isFake });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
