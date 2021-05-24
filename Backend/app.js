// 모듈을 가져와 저장 //
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 라우터 주소를 가져와서 저장 //
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var projectAddRouter = require('./routes/projcetAdd');
var projectGetRouter = require('./routes/projectGet');
var deleteProjectRouter = require('./routes/projcetDelete');

// express 모듈을 app에 적용 //
var app = express();

// express 모듈을 활용하여, 나머지 모듈을 모두 적용 //
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('connect-history-api-fallback')());

// 가져온 라우터 주소와 사용자 요청을 매칭 //
app.use('/', indexRouter);
app.use('/loginTry', loginRouter);
app.use('/registerTry', registerRouter);
app.use('/projectAddTry', projectAddRouter);
app.use('/projectGetTry', projectGetRouter);
app.use('/deleteProject', deleteProjectRouter);

// 모든, 폴더에서 이 기능들이 적용 될 수 있도록 적용 //
module.exports = app;
