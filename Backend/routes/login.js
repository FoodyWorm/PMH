// 모듈 사용 선언 //
var express = require('express');
var router = express.Router();
var mysql = require('mysql');


// MySQL 접속 옵션 설정 //
var connection = mysql.createConnection({
    host: '192.168.0.12',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'PMH'
});

// 설정된 옵션으로 데이터베이스 접속 //
connection.connect();


/* POST 요청 '/loginTry' */
router.post('/', function(req, res, next) {
    // 입력받은 데이터 값 //
    console.log('Login Try');
    console.log('Request ID: ' + req.body.id + ', Request PW: ' + req.body.pw);

    // 입력받은 데이터 값을 데이터베이스에 저장 //






    // 만약, ID와 PW정보값과 DB값이 일치한다면 res.send "true" 아니라면, "false"
    res.send(true);
});



module.exports = router;