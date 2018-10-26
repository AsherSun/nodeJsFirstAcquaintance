const exec = require('child_process').exec;

function start(response) {
  exec('dir', (err, stdout) => {
    function sleep(milliSeconds) {
      var startTime = new Date().getTime();
      while(new Date().getTime() < startTime + milliSeconds);
      return 'okay'
    }
    sleep(10000)
    response.writeHead(404, {"Content-Type": 'text/plain'});
    response.write(stdout, 'utf8');
    response.end();
  })
}

function upload(response) {
  response.writeHead(404, {"Content-Type": 'text/plain'});
  response.write('Request handler "upload" was called.', 'utf8');
  response.end();
}

module.exports = {
  start,
  upload
}