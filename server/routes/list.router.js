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




module.exports = router;