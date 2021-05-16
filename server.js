/*
required files
*/
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route');
const server = require('http').createServer(app)

var expressValidator = require('express-validator')
require('dotenv').config();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));

/*
Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());
app.use(expressValidator());

/*
server is listen 4000 port 
*/
server.listen(4000, () => {
    console.log("Server is listening to port 4000");
})

/*
calling router
*/
app.use('/', route);

/*
connect config and send to the mongoose connectivity
*/
const dbConfig = require('./config/dbConfig');

/*
connection to the mongo database
*/
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected to database");
}).catch(err => {
    console.log("could not connect to the database");
    process.exit();
});

