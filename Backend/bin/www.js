/* 모듈화된 app.js를 가져와서 이어서 사용 및 모듈 가져오기 */
var app = require('../app');
var debug = require('debug')('backend:server');
var http = require('http');

/* 포트, 아이피, URL주소 생성 및 적용 */
var port = normalizePort(process.env.PORT || '3000');
var ip = "127.0.0.1";
var url = "http://" + ip + ":" + port + "/#/";
app.set('port', port);
app.set()

/* Express 서버 생성 */
var server = http.createServer(app);

/* Express서버를 포트 3000으로 실행하며, 에러가 발생하면 onError함수를 실행하고 서버에 접속하면 onListening함수를 실행 */
server.listen(port, '127.0.0.1', () => {
    // 서버 옵션
    console.log("Server Port: " + port + ", IP: " + ip + ", URL: " + url);

});
server.on('error', onError);
server.on('listening', onListening);

/* 안전한 포트생성 함수 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/* 에러 발생시 대처 함수 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
      
    default:
      throw error;
  }
}

/* 서버 접속시 실행 함수 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;