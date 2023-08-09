const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
let db = process.env.db;

module.exports = connect = () => {
  mongoose
    .connect(db)
    .then(() => {
      console.log("Connected successfully");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
