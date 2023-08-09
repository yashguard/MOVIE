const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  ratings: String,
  price: Number,
  date: String,
  actors: String,
  images: [],
});
