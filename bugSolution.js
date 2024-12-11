const express = require('express');
const app = express();
app.use(express.json({limit: '10mb'})); // Increased limit to handle larger requests
app.use(express.urlencoded({ extended: true })); // Added for url-encoded requests
app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty');
  }
  // Process the data
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));