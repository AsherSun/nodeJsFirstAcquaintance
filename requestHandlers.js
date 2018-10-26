const exec = require('child_process').exec;

function start(response) {
  // function sleep(milliSeconds) {
  //   var startTime = new Date().getTime();
  //   while(new Date().getTime() < startTime + milliSeconds);
  // }
  // sleep(10000)
  exec('dir',{ encoding: 'utf8' }, (err, stdout) => {
    response(stdout)
  })
  // return 'Request handler "start" was called.' + content
}

function upload(response) {
  response('Request handler "upload" was called.')
}
module.exports = {
  start,
  upload
}