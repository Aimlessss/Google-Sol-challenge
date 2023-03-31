const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/', (req, res) => {
  res.send('Hello World!');
});
  

// Start the server
app.listen(3001, () => {
    console.log("listening on http://localhost:3001");
  })