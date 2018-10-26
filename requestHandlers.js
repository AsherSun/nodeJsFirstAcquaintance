
const querystring = require('querystring');
const fs = require('fs');
var mutipart = require('connect-multiparty');

function start(response) {
  let body = `
    <html>
      <head>
        <meta http-equiv="content-Type" content="text/html" charset="utf-8" />
      </head>
      <body>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="upload"/>
          <input type="submit" value="Submit text"/>
        </form>
      </body>
    </html>
  `
  response(body, 'text/html');
}

function upload(response, request) {
  console.log(request)
  response('sdfsf')
}

function show(response) {
  // fs.readFile('/tmp/test.png', 'binary', function(err, file) {
  //   if (error) {
  //     response(err + '\n');
  //   } else {
  //     response(file, 'binary')
  //   }
  // })
}

module.exports = {
  start,
  upload,
  show
}