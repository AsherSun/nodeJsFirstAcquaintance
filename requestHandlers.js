function start() {
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000)
  return 'Request handler "start" was called.'
}

function upload() {
  return 'Request handler "upload" was called.'
}
module.exports = {
  start,
  upload
}