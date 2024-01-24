// Step 1.)
// I ran the following command: npm install express --save

// Setup the express server and listen on port 3000
const express = require("express");
const app = express();
const port = 3000;

// When on the "/" directory of port 3000, the page displays "Hello World!" in h1 html format
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// log to the console "Example app listening on port 3000"
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Step 2.)
// The above code can be run without error using the following command: node express.js
