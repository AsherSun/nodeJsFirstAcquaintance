module.exports = function(path, resHandle, response, data) {
if (typeof resHandle[path] === 'function') {
    return resHandle[path](response, data)
  } else {
    response('404 Not found');
  }
}