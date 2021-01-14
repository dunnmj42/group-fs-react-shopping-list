const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req,res) => {
    const item = req.body
    const sqlText = `INSERT INTO shopping_list ("item_name", "quantity", "unit", "purchased")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [item.item_name, item.quantity, item.unit, item.purchased])
    .then((result) => {
        console.log('Added Item to database', item);
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`Error making database query ${sqlText}`, err);
        res.sendStatus(500);
    });
});

// DELETE All
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


// DELETE ITEM
router.delete('/:id', (req, res) => {
    let id = req.params.id
    console.log('Deleting item number', id);
    
    let queryText = `DELETE FROM shopping_list
                    WHERE "id" = $1`

    pool.query(queryText, [id]).then((results) => {
        console.log(results.rows);
        res.sendStatus(204)
    })
})

module.exports = router;