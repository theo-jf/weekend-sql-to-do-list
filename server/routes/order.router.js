const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// PUT request for order change --> url will pass ?id='', id will be id to swap with
router.put('/:id/', (req, res) => {
    console.log(`Updating task order, id ${req.params.id} and ${req.query.id}`);
    let updateId = req.params.id;
    let swapId = req.query.id;


    // Swap ranks associated with both ids
    const queryText = `
        UPDATE "tasks"
            SET "rank" = (SELECT SUM("rank")
                            FROM "tasks"
                            WHERE "id" IN ($1, $2)
                          ) - "rank"
            WHERE "id" IN ($1, $2);
    `
    pool.query(queryText, [updateId, swapId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error swapping task ranks', error);
            res.sendStatus(500);
        });
});

module.exports = router;