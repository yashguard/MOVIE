const express = require("express");
const cors = require("cors");
const router = require("./routes/movie.routes");
const server = express();
server.use(express.json());
const connect = require("./config/db");
server.use(cors());
server.use(express.urlencoded({ extended: true }));
require("dotenv").config({ path: "./config/.env" });
let port = process.env.PORT;
server.use("/form", router);
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.use(express.static(__dirname + "/public"));

server.listen(port, () => {
  console.log("listening on port " + port);
  connect()
});
