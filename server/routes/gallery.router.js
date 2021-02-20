const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM "images" ORDER BY "id" ASC';

  pool.query(sqlText)
    .then((result) => {
      console.log('Successful GET from DB', result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error in GET', err)
      res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;