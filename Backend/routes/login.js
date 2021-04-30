var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var Test = console.log('Login Try');
    res.send(Test + "Login Try");
});

module.exports = router;
