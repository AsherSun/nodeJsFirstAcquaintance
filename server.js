const http = require('http')

function start(route, resHandle) {
  http.createServer((request, response) => {
    let postData = ''
    if (request.url === '/favicon.ico') { return false }
    request.setEncoding("utf8");
    request.addListener('data', function(data) {
      postData += data;
    })
    request.addListener('end', function() {
      route(request.url, resHandle, function(body, contentType = "text/plain") {
        response.writeHead(200, {
          "Content-Type": contentType,
          'Content-Length': Buffer.byteLength(body)
        });
        response.write(body);
        response.end();
      }, postData);
    })
  }).listen(8888);
}

console.log('Server has started.')

exports.start = start