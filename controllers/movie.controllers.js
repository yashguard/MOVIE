const homePath = require("../homePath");
const movieSchema = require("../models/movie.schema");
let images = [];
let path = homePath();

const movieHome = (req, res) => {
  res.render("index");
};

const movieUpload = (req, res) => {
  let {
    movieName,
    movieDescription,
    movieRating,
    moviePrice,
    movieDate,
    movieActorsName,
  } = req.body;
  for (let i = 0; i < req.files.length; i++) {
    images.push(path + "/" + req.files[i].path);
  }
  movieSchema.create({
    title: movieName,
    description: movieDescription,
    ratings: movieRating,
    price: moviePrice,
    date: movieDate,
    actors: movieActorsName,
    images: images,
  });
  res.send("Details added successfully");
};

module.exports = { movieHome, movieUpload };
