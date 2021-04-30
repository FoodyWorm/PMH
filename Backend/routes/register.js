var express = require('express');
var router = express.Router();

/* POST /registerTry */
router.post('/', function(req, res, next) {
    console.log('Register Try');
    res.send("Register Try");
});

module.exports = router;
