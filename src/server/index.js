var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const axios = require("axios").default;
const bodyParser = require("body-parser");
var cors = require("cors");

const API = "https://api.meaningcloud.com/sentiment-2.1";

dotenv.config();
console.log(dotenv.config().parsed.API_KEY);
console.log(`Your API key is ${process.env.API_KEY}`);

const app = express();
app.use(cors());
app.use(express.static("dist"));
console.log(__dirname);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  // res.sendFile("index.html");
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/", function (req, res) {
  const key = dotenv.config().parsed.API_KEY;
  console.log(key);
  const { url } = req.body;
  console.log(url);
  // const API_URL = `${API}?key=${key}&url=${url}&lang=en`;

  axios
    .post(API, {
      url,
      key,
    })
    .then((resApi) => res.send(resApi));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
