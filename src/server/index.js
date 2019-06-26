/**
 * index.js
 * Entry file for express server
 */

// Node Modules
const express = require('express');
const path = require('path');

const app = express();

// Constants
const PORT = 8080;
const PUBLIC_PATH = '../../public';

app.use(express.static(__dirname + '/' + PUBLIC_PATH));
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, PUBLIC_PATH, 'index.html')),
);

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Production running on port ${PORT}`),
);
