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
    })
})

module.exports = router;