const mongoose = require('mongoose');

const artworkModel = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    pic: { type: String },
  }
)

const Artwork = mongoose.model("Artwork", artworkModel);

module.exports = Artwork;