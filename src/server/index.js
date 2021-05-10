var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
// const axios = require("axios").default;
// const bodyParser = require("body-parser");

dotenv.config();

const app = express();

var cors = require("cors");
app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

const API = "https://api.meaningcloud.com/sentiment-2.1";
const key = process.env.API_KEY;
console.log(dotenv.config().parsed.API_KEY);
console.log(`Your API key is ${process.env.API_KEY}`);

app.get("/", function (req, res) {
  // res.sendFile("index.html");
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// const key = dotenv.config().parsed.API_KEY;
app.post("/", async function (req, res) {
  let url = req.body.url;
  console.log(url);
  const API_URL = `${API}key=${key}&url=${url}&lang=en`;

  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(data);
  res.send(data);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
