module.exports = function(path, resHandle, response) {
if (typeof resHandle[path] === 'function') {
    return resHandle[path](response)
  } else {
    response('404 Not found');
  }
}