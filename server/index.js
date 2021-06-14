const express = require('express');
const app = express();
const port = 3111;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`CryptoTracker is listening on port: ${port}`);
});