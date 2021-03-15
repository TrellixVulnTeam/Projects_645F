const express = require('express')
const app = express()
const port = 8080
var cors = require("cors")
var path = require('path');

var dbcon = require("./db/dbconn");

var user = require('./user/user');

var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());

app.use('/user', user);

app.listen(port);
app.get("/", express.static(path.join(__dirname, "./public")));
