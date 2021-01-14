const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...



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