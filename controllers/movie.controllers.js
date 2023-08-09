const homePath = require("../homePath");
let images = [];
let path = homePath();

const movieHome = (req, res) => {
  res.render("index");
};

const movieUpload = (req, res) => {
  for (let i = 0; i < req.files.length; i++) {
    images.push(path + "/" + req.files[i].path);
  }
  res.send("Details added successfully");
};

module.exports = { movieHome, movieUpload };
