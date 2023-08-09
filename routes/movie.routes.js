const { Router } = require("express");
const { movieHome, movieUpload } = require("../controllers/movie.controllers");
const multer = require("multer");
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
router.post("/upload", upload, movieUpload);

module.exports = router;
