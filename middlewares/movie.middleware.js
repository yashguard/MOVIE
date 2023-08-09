module.exports = middleware = (req, res, next) => {
  let {
    movieName,
    movieDescription,
    movieRating,
    moviePrice,
    movieDate,
    movieActorsName,
  } = req.body; 
  if (
    movieName &&
    movieDescription &&
    movieRating &&
    moviePrice &&
    movieDate &&
    movieActorsName
  ) {
    next();
  } else {
    res.status(404).send("Please fill the movie details");
  }
};
