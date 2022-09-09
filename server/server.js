const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/tasks.router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use('/task', taskRouter);

app.use(express.static('server/public'))

// Start listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});