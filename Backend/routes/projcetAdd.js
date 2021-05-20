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


/* POST 요청 '/projectAddTry' */
router.post('/', (req, res, next) => {
        // 입력받은 데이터 값 //
        console.log('Projcet Add Try');
        console.log('Request Title: ' + req.body.title + ', Request Department: ' + req.body.department);
        console.log('\nRequest Users: ' + req.body.users + ', Request StartDay: ' + req.body.startDay);
        console.log('\nRequest EndDay: ' + req.body.endDay + ', Request Purpose: ' + req.body.purpose + "\n");

        // 데이터베이스의 데이터 값 //
        // 쿼리 명령문 (Select)
        const select_Query = "Select * From projects";

        // 입력받은 데이터 값을 데이터베이스에 저장 //
        // 쿼리 명령문 (Insert) 
        const insert_Query = "Insert Into projects (project_index, project_title, project_department, project_users, project_startDay, project_endDay, project_purpose, project_status, project_statusType, project_completion) VALUES (0,'" + 
        req.body.title + "', '" + req.body.department + "', '" + req.body.users + "', '" + req.body.startDay + "', '" + req.body.endDay + "', '" + req.body.purpose + "', 'on schedule', 'info','" + 0 + "')";

        // projects 테이블의 데이터 값을 가져와 저장, 쿼리 명령문 실행. //
        connection.query(select_Query, (err, result) => {
            // Select - getData
            if(err) { throw err; }
            console.log("Select Data" + result);
            console.log(JSON.parse(JSON.stringify(result)) + "\n");
            const getData = JSON.parse(JSON.stringify(result));
            //console.log("getData.project_title: " + getData[0].project_title);
            
            // 중복값 확인
            for(var i=0; i<getData.length; i++) {
                console.log("반복문: " + i + "번째, 최대값: " + (getData.length-1));

                 // 프로젝트 제목에 중복값이 존재할 경우 false 응답
                if((req.body.title == getData[i].project_title)) {
                    console.log("중복된 값이 존재합니다.");
                    res.send(false);
                    break;
                }

                // 프로젝트 제목에 중복값이 존재할 경우 true 응답
                if(i >= (getData.length-1)){
                    //users 테이블을 대상으로 데이터 저장, 쿼리 명령문 실행. //
                    connection.query(insert_Query, (err, result) => {
                        // Insert - setData
                        if(err) { throw err; }
                        console.log("Insert Data" + result);
                        res.send(true);
                    });
                }
            }

        });
});

module.exports = router;
