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
router.delete('/', (req, res, next) => {
    console.log("Request Delete");
    console.log("Request Index: " + req.body.index);

    // 쿼리 명령문 (Delete)
    const delete_Query = "Delete FROM projects WHERE project_index='" + req.body.index + "'";

    // 입력받은 Index값에 해당되는 행을 삭제//
    connection.query(delete_Query, (err, result) => {
        // Delete
        if(err) { throw err; }
        console.log("Delete Data" + result);
        res.send(true);
    });
});

module.exports = router;
