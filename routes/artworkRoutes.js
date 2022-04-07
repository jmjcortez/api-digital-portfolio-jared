const express = require('express');

const { getArtworkList, getArtwork } = require('../controllers/artworkControllers');

const router = express.Router();

router.get('/', getArtworkList);
router.get('/:id', getArtwork);


module.exports = router;