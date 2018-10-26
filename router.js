module.exports = function(path, resHandle, response, request) {
if (typeof resHandle[path] === 'function') {
    return resHandle[path](response, request)
  } else {
    response('404 Not found');
  }
}