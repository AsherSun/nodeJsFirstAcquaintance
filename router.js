module.exports = function(path, resHandle) {
if (typeof resHandle[path] === 'function') {
    return resHandle[path]()
  } else {
    return '404 Not found' +  resHandle['/start']()
  }
}