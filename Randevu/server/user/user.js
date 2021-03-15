const express = require('express')
const app = express()
var router = express.Router()
var dbcon = require("../db/dbconn");
var cors = require("cors")
var bodyParser = require('body-parser');
var emailCheck = require('email-check');
var emailExistence = require('email-existence');

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
router.use(bodyParser.json());


router.get('/', function(req,res) {
    dbcon.query("select * from subjects", function(err, result){
      if (err) throw err.message;
      res.send(result);
    })
});


router.post('/login', function(req,res) {
  var mail = req.body._parts[0][1];
  var password = req.body._parts[1][1];

  console.log(mail);

  emailExistence.check(mail, function(error, response){
        console.log('res: '+response);
    });

  return({message:1})
});

module.exports = router;
