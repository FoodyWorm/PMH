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


/* GET 요청 '/projectGetTry' */
router.get('/', (req, res, next) => {

        // 데이터베이스의 데이터 값 //
        // 쿼리 명령문 (Select)
        const select_Query = "Select * From projects";

        // projects 테이블의 데이터 값을 가져와 저장, 쿼리 명령문 실행. //
        connection.query(select_Query, (err, result) => {
            // Select - getData
            if(err) { throw err; }
            console.log("Get Projects_Title: " + result[0].project_title);
            console.log("Get Projects_Title_Json: " + JSON.parse(JSON.stringify(result))[0].project_title + "\n");
            const getData = JSON.parse(JSON.stringify(result));
            //console.log("getData.project_title: " + getData[0].project_title);

            res.send(getData);
        });
});

module.exports = router;
