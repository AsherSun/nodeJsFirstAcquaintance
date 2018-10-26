module.exports = function(path, resHandle, response) {
if (typeof resHandle[path] === 'function') {
    return resHandle[path](response)
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('404 Not found' +  resHandle['/start']());
    response.end();
  }
}