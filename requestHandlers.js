const exec = require('child_process').exec;

function start(response) {
  // function sleep(milliSeconds) {
  //   var startTime = new Date().getTime();
  //   while(new Date().getTime() < startTime + milliSeconds);
  // }
  // sleep(10000)
  var content = 'empty'
  exec('dir', (err, stdout) => {
    console.log('stdout: ', typeof stdout)
    content += stdout
  })
  return 'Request handler "start" was called.' + content
}

function upload(response) {
  return 'Request handler "upload" was called.'
}
module.exports = {
  start,
  upload
}