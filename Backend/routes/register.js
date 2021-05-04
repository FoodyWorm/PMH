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
    database: 'pmh'
});

// 설정된 옵션으로 데이터베이스 접속 //
connection.connect();


/* POST 요청 '/registerTry' */
router.post('/', function(req, res, next) {
    // 입력받은 데이터 값 //
    console.log('Register Try');
    console.log('Request Name: ' + req.body.name + ', Request ID: ' + req.body.id);
    console.log(', Request PW: ' + req.body.pw + ', Request Department: ' + req.body.department + "\n");

    // 입력받은 데이터 값을 데이터베이스에 저장 //
    // 쿼리 명령문 (Insert)
    const insert_Query = "Insert Into users (user_index, user_id, user_pw, user_name, user_department, user_authority) VALUES (0,'" + 
    req.body.id + "', '" + req.body.pw + "', '" + req.body.name + "', '" + req.body.department + "', " + 1 + ")";
    
    //users 테이블을 대상으로 데이터 저장, 쿼리 명령문 실행.
    connection.query(insert_Query, (err, result) => {
        if(err) { throw err; }
        console.log("Insert Data");
        console.log(result); 

        // 만약, 회원정보 값이 중복되는 것이 없다면, res.send "true" 아니라면, "false"
        res.send(true);
    });

    
});

module.exports = router;
