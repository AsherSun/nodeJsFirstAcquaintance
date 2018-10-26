const http = require('http')
const url = require('url')

function start(route, resHandle) {
  http.createServer((request, response) => {
    if (request.url === '/favicon.ico') { return false }
    route(request.url, resHandle, function(body, contentType = "text/plain") {
      response.writeHead(404, {"Content-Type": contentType});
      response.write(body, 'utf8');
      response.end();
    })
  }).listen(8888);
}

console.log('Server has started.')

exports.start = start