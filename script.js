const express = require("express");
const bodyParser = require("body-parser");
const { PythonShell } = require("python-shell");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint for fake profile detection
app.post("/detectFakeProfile", (req, res) => {
  const username = req.body.username;

  // Call Python script to detect fake profile
  PythonShell.run('fake_profile_detector.py', { args: [username] }, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const prediction = parseFloat(results[0]);
      const isFake = prediction > 0.5; // Assuming prediction is probability of being fake
      res.json({ username, isFake });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
