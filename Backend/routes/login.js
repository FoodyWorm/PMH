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
    database: 'PMH'
});

// 설정된 옵션으로 데이터베이스 접속 //
connection.connect();


/* POST 요청 '/loginTry' */
router.post('/', function(req, res, next) {
    // undefined 방지조건
    if(req.body.id != undefined && req.body.pw != undefined) {
        // 입력받은 데이터 값 //
        console.log('Login Try');
        console.log('Request ID: ' + req.body.id + ', Request PW: ' + req.body.pw);


        // 비교할 데이터베이스의 데이터 값 //
        // 쿼리 명령문 (Select)
        const select_Query = "Select user_id, user_pw From users";


        // 입력받은 데이터 값을 데이터베이스의 데이터 값과 비교 //
        connection.query(select_Query, (err, result) => {
            // Select - getData
            if(err) { throw err; }
            console.log("Select Data" + result);
            console.log(JSON.parse(JSON.stringify(result)));
            const getData = JSON.parse(JSON.stringify(result));
            
            // 데이터 일치여부 확인
            for(var i=0; i<getData.length; i++) {
                console.log("반복문: " + i + "번째, 최대값: " + (getData.length-1));

                // 데이터가 일치할 경우
                if(((req.body.id == getData[i].user_id) && (req.body.pw == getData[i].user_pw))) {
                    console.log("데이터가 일치합니다. 로그인 시도 중...");
                    res.cookie('status', true, { maxAge:10000 });
                    res.send(true);
                    break;
                }

                // 데이터가 일치하지 않을 경우
                if(i >= (getData.length-1)){
                    console.log("데이터가 일치하지않습니다.. 경고!");
                    res.send(false);
                    break;
                }
            }
        });

    }
    else {
        // 만약, undefined값이 존재한다면, res.send "false"
        res.send(false);
    }
});



module.exports = router;