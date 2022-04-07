const asyncHandler = require('express-async-handler');
const res = require('express/lib/response');

const Artwork = require('../models/artworkModel');

const getArtworkList = asyncHandler( async (req, res) => {
  
  const artworks = Artwork.find().exec(function(err, docs) {
    res.json(docs);
  });

});

const getArtwork = asyncHandler( async (req, res) => {
  
  const artwork = artworks.find(a => a.id === req.params.id);

  artwork ? ( 
    res.json(artwork) 
  ) : (
    res.sendStatus(404)
  );
});

module.exports = { getArtworkList, getArtwork }