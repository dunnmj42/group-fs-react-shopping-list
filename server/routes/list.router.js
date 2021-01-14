const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
// DELETE
// router.delete("/:id", (req, res) => {
//   // target id of thing being deleted
//   let id = req.params.id;
//   console.log("Delete route called with id of: ", id);

//   // sql to delete item from database
//   const queryText = `DELETE FROM "todo" WHERE "id" = $1;`;

//   // sending sql code to postico
//   pool
//     .query(queryText, [id])
//     .then((result) => {
//       res.sendStatus(204);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     });
// }); // end DELETE


// // PUT
// router.put("/:id", (req, res) => {
//   // id of todo to change status
//   const id = req.params.id;
//   // changed status info from client
//   const completeStatus = req.body.complete;

//   // query to SQL
//   const queryText = `
//     UPDATE "todo" SET "complete" = $1 WHERE "id" = $2;
//   `;

//   pool
//     .query(queryText, [completeStatus, id])
//     .then((result) => {
//       console.log(result);
//       res.sendStatus(200);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     });
// });// end PUT




module.exports = router;