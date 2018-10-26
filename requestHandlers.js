const exec = require('child_process').exec;

function start(response) {
  exec('dir', (err, stdout) => {
    function sleep(milliSeconds) {
      var startTime = new Date().getTime();
      while(new Date().getTime() < startTime + milliSeconds);
      return 'okay'
    }
    sleep(10000)
    response(stdout)
  })
}

function upload(response) {
  response('Request handler "upload" was called.')
}

module.exports = {
  start,
  upload
}