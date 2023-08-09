const { Router } = require("express");
const {
  movieHome,
  movieUpload,
  imageView,
} = require("../controllers/movie.controllers");
const multer = require("multer");
const middleware = require("../middlewares/movie.middleware");
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./images");
  },
  filename: (req, file, cb) => {
    return cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage,
}).array("movieImage");

router.get("/", movieHome);
router.get("/imageview", imageView);
router.post("/upload", upload, middleware, movieUpload);

module.exports = router;
