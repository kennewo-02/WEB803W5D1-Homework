const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

//configure the database
require('dotenv').config();
const mongoose = require('mongoose');

//Connecting to the database

mongoose.connect(process.env.DATABASE)
    .then(() => console.log('Mongoose connection open'))
    .catch(err => console.log(`Connection error: ${err.message}`));

require('./node-mongo/models/inventory.model.js');

require('./node-mongo/routes/inventory.router.js')(app);

// Create a Server
const PORT = 8080;
const HOST = 'localhost';

const server = app.listen(PORT, HOST, () => {
    console.log(`App listening at http://${HOST}:${PORT}`);
});
