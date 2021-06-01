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


/* POST 요청 '/checkProjectTry' */
router.put('/', function(req, res, next) {
    // 입력받은 데이터 값 //
    console.log('--- CheckProject Try ---');
    console.log('Project_Checked: ' + req.body.project_checked + ', Project_Index: ' + req.body.project_index);
    //console.log('Project_Checked: ' + req.body.project_checked + ', Status: ' + req.body.status);
    //console.log('Status_Type: ' + req.body.status_Type + ', Completion: ' + req.body.completion + "\n");

    // 입력받은 데이터 값을 데이터베이스에 저장 //
    // 쿼리 명령문 (Update)
    const update_Query = "UPDATE projects SET project_check=" + req.body.project_checked + " WHERE project_index=" + req.body.project_index + ";" // 0, 1
    console.log("Sucssce Query: " + update_Query);

    // projects 테이블의 데이터 값을 변경, 쿼리 명령문 실행. //
    connection.query(update_Query, (err, result) => {
        if(err) { throw err; }
        console.log("Sucssce Update: " + result);
        res.send(true);
    });
});

module.exports = router;
