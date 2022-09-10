const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

// ALL STRETCH GOAL HAVE TO BE DONE IN SPECIFIC BRANCHES
//  - bootstrap
//  - sweet alerts (confirm delete)
//  - order reversing (you don't need this since you're going to do a changed rank function)
//  - Time completed


// GET route for display



// POST route for adding task


// PUT route for changing completion status ("complete" = NOT "complete")
    // Also return local time for feature-time-completed??

// Different put route for changing order? Priority #? Little up and down arrows like steam wish list?
    
    // ---- Below is silly ----
    // Up arrow clicked -> send data-id through PUT request
    // For matching row with that id -> Find what rank number it has --> do an i+1 situation to find out whats above it
    // Decrease the above rank# by 1, increase the data-id match by 1
    
    // ---- Do this for ordering put ---- 
    // OR just use .above and .below to get the IDs of both items that need to swap positions based on if up or down arrow is pressed
    // Redo get request to refresh DOM

// DELETE request for deleting a task
    // Include an "are you sure?" popup from bootstrap