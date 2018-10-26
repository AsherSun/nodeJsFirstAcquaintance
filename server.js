const http = require('http')

function start(route, resHandle) {
  http.createServer((request, response) => {
    let postData = ''
    if (request.url === '/favicon.ico') { return false }
    route(request.url, resHandle, function(body, contentType = "text/plain") {
      response.writeHead(200, {
        "Content-Type": contentType,
        'Content-Length': Buffer.byteLength(body)
      });
      response.write(body);
      response.end();
    }, request);
  }).listen(8888);
}

console.log('Server has started.')

exports.start = start