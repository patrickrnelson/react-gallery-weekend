const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req.params', req.params);
    const galleryId = req.params.id;
    const sqlText = 'UPDATE "images" SET "likes"="likes" + 1 WHERE "id"=$1;'

    pool.query(sqlText, [galleryId])
      .then((result) => {
        console.log('PUT to update like count');
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error in PUT', err);
        res.sendStatus(500);
      })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM "images" ORDER BY "id" ASC';

  pool.query(sqlText)
    .then((result) => {
      console.log('Successful GET from DB');
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error in GET', err)
      res.sendStatus(500);
    })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
  console.log('req.body', req.body);
  let image = req.body;
  const sqlText = `INSERT INTO "images" ("path", "description") 
                  VALUES ($1, $2);`

  pool.query(sqlText, [image.url, image.description])
    .then((result) => {
      console.log('Successful POST', result);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in POST', err);
      res.sendStatus(500);
    })
})

module.exports = router;