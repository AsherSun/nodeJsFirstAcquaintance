const http = require('http')
const url = require('url')

function start(route, resHandle) {
  http.createServer((request, response) => {
    if (request.url === '/favicon.ico') { return false }
    route(request.url, resHandle, response)
  }).listen(8888);
}

console.log('Server has started.')

exports.start = start