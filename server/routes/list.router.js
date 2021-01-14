const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// DELETE
router.delete("/", (req, res) => {
 
  console.log("Delete entire shopping basket");

  // sql to delete item from database
  const queryText = `DELETE FROM "shopping_list";`;

  // sending sql code to postico
  pool
    .query(queryText)
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); // end DELETE


// // PUT
router.put("/", (req, res) => {
 
  console.log("Reset all completed shopping items");

  // sql to update items from database
  const queryText = `
  UPDATE "shopping_list"
  SET "purchased" = false
  WHERE "purchased" = true;`;

  // sending sql code to postico
  pool
    .query(queryText)
    .then((result) => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
}); // end PUT



router.get('/', (req, res) => {

    const queryText = `SELECT * FROM shopping_list ORDER BY purchased, item_name;`;
    pool.query(queryText)
        .then((response) => {
            console.log(response);
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        })
});


// Delete
router.delete('/:id', (req, res) => {
    let id = req.params.id
    console.log('Deleting item number', id);
    
    let queryText = `SELECT * FROM shopping_list
                    WHERE "id" = $1`

    pool.query(queryText, [id]).then((results) => {
        console.log(results.rows);
        res.sendStatus(204)
    })
})

module.exports = router;