// 모듈 사용 선언 //
var express = require('express');
var router = express.Router();
var mysql = require('mysql');


// MySQL 접속 옵션 설정 //
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'pmh'
});

// 설정된 옵션으로 데이터베이스 접속 //
connection.connect();


/* POST 요청 '/registerTry' */
router.post('/', function(req, res, next) {
    // undefined 방지조건
    if(req.body.name != undefined && req.body.id != undefined && req.body.pw != undefined && req.body.department != undefined) {
        // 입력받은 데이터 값 //
        console.log('Register Try');
        console.log('Request Name: ' + req.body.name + ', Request ID: ' + req.body.id);
        console.log(', Request PW: ' + req.body.pw + ', Request Department: ' + req.body.department + "\n");

        // 데이터베이스의 데이터 값 //
        // 쿼리 명령문 (Select)
        const select_Query = "Select * From users";

        // 입력받은 데이터 값을 데이터베이스에 저장 //
        // 쿼리 명령문 (Insert)
        const insert_Query = "Insert Into users (user_index, user_id, user_pw, user_name, user_department, user_authority) VALUES (0,'" + 
        req.body.id + "', '" + req.body.pw + "', '" + req.body.name + "', '" + req.body.department + "', " + 1 + ")";

        // users 테이블의 데이터 값을 가져와 저장, 쿼리 명령문 실행. //
        connection.query(select_Query, (err, result) => {
            // Select - getData
            if(err) { throw err; }
            console.log("Select Data" + result);
            console.log(JSON.parse(JSON.stringify(result)));
            const getData = JSON.parse(JSON.stringify(result));
            //console.log("getData.user_name: " + getData[0].user_name);
            
            
            // 중복값 확인
            for(var i=0; i<getData.length; i++) {
                console.log("반복문: " + i + "번째, 최대값: " + (getData.length-1));

                 // 회원가입이 비정상적일 경우 false 응답
                if((req.body.name == getData[i].user_name) || (req.body.id == getData[i].user_id) || (req.body.pw == getData[i].user_pw)) {
                    console.log("중복된 값이 존재합니다.");
                    res.send(false);
                    break;
                }

                // 회원가입이 정상적으로 될 경우 true 응답
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

    }
    else{
        // undefined 값이 넘어왔을 경우 false 응답
        res.send(false);
    }
});

module.exports = router;
