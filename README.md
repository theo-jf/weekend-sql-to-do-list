# Full-Stack To-Do List

## Description
*Duration: Weekend assignment*

This weekend assignment marked our first foray into developing a completely full-stack application independently. Tasked with creating a to-do list which recorded user-inputted tasks and their completion status, all task storage, edits, and deletions were to be directly tied to a database rather than any server-side JavaScript data. 

Task ordering, completion time, and alerts were all stretch-goal functionalities, with my personal goal being to orient the styling and layout towards a mobile device.


Full assignment details can be found in [`INSTRUCTIONS.md`](INSTRUCTIONS.md)


## Final Product Snapshot

![Wireframe](snapshot/To-do%20list%20screenshot.png)

### Prerequisites
    • Node.js

## Installation and Setup

(Virtual deployment coming soon!)

1. Clone this repository from Github
2. Create a database titled "weekend-to-do-app" and create a "tasks" table using the initializer found in `database.sql`
3. Run `npm install` in your terminal to download the necessary modules
4. Run `npm start` to start the server
5. Visit http://localhost:5000 in your browser to view the project!

## Usage

Press the plus sign on the right side of the screen to add a task to your to-do list. Once your task is added, click the empty checkbox to mark it as complete. To edit the name of a task, click on its name, and then double-click anywhere on the screen to confirm your changes.

With multiple tasks on your list, use the arrows on the left side to change the order in which they appear. All changes to order, name, and completion status will be saved by the server.

To permanently delete a task from your list, click the red X button next to its checkbox.

## Built With

* HTML
* CSS
* JavaScript
* jQuery
* AJAX
* Express 
* Node-Postgres

## Acknowledgement

Special thanks to [Prime Digital Academy!](https://github.com/PrimeAcademy) 