var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var Test = console.log('Register Try');
    res.send(Test + "Register Try");
});

module.exports = router;
