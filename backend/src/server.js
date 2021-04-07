const express = require("express");

const connect = require("./config/db");
const app = express();
app.use(express.json());

const start = async () => {
  await connect();
};
