const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

router.put('/:id', (req, res) => {
    console.log(`Updating task name, id ${req.params.id}`);
    let updateId = req.params.id;
    let newName = req.body.newName;

    // Change task name
    const queryText = `
        UPDATE "tasks"
            SET "name" = $1
            WHERE "id" = $2;
    `
    pool.query(queryText, [newName, updateId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error updating task name', error);
            res.sendStatus(500);
        });
});


module.exports = router;