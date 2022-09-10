const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// ALL STRETCH GOAL HAVE TO BE DONE IN SPECIFIC BRANCHES
//  - bootstrap
//  - sweet alerts (confirm delete)
//  - order reversing (you don't need this since you're going to do a changed rank function)
//  - Time completed


// GET route for display
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "tasks" ORDER BY "rank";`
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error in /task GET', error);
        res.sendStatus(500);
    });
});


// POST route for adding task
router.post('/', (req, res) => {
    let newTask = req.body;

    console.log(`Adding task`, newTask);

    let queryText = `INSERT INTO "tasks" 
                        ("name")
                        VALUES 
                        ($1);`;

    pool.query(queryText, [newTask.name])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in /task POST', error);
            res.sendStatus(500);
        });
});


// PUT route for changing completion status ("complete" = NOT "complete")
router.put('/:id', (req, res) => {
    console.log(`Updating task, id ${req.params.id}`);
    let updateId = req.params.id;

    // Flip "complete" value to its opposite (true / false)
    const queryText = `
        UPDATE "tasks"
            SET "complete" = NOT "complete"
            WHERE "id" = $1;
    `
    pool.query(queryText, [updateId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error updating task', error);
            res.sendStatus(500);
        });

    // Also return local time for feature-time-completed?? (probably this belongs on client side)
});

// Different put route for changing order? Priority #? Little up and down arrows like steam wish list?
    
    // ---- Do this for ordering put ---- 
    // Up arrow is clicked --> rank number is swapped with what's above it!
    // Down arrow is clicked --> rank number is swapped with what's below it!

// DELETE request for deleting a task
    // Include an "are you sure?" popup from bootstrap (client side?)

router.delete('/:id', (req, res) => {
    console.log(`Deleting task, id ${req.params.id}`);
    let deleteId = req.params.id;
    
    const queryText = `
        DELETE from "tasks"
            WHERE "id" = $1;
    `
    pool.query(queryText, [deleteId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`Error deleting task`, error);
            res.sendStatus(500);
        });
});


module.exports = router;