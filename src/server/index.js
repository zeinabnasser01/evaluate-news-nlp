var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const API = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const key = process.env.API_KEY;
console.log(dotenv.config().parsed.API_KEY);
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
app.use(express.static('dist'));

var cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.post('/api', async function (req, res) {
  const API_URL = `${API}${key}&lang=auto&url=${req.body.url}`;
  console.log(API_URL);

  const response = await fetch(API_URL, { method: 'POST' });

  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
