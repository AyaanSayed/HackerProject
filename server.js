const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/detectFakeProfile", (req, res) => {
  const username = req.body.username;
  // Implement your fake profile detection algorithm here
  const fakeProbability = Math.random(); // Placeholder for detection result
  res.json({ username, fakeProbability });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
