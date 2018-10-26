
const querystring = require('querystring');
const fs = require('fs');

function start(response) {
  let body = `
    <html>
      <head>
        <meta http-equiv="content-Type" content="text/html" charset="utf-8" />
      </head>
      <body>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <textarea name="text" id="" cols="30" rows="10"></textarea>
          <input type="file" name="upload"/>
          <input type="submit" value="Submit text"/>
        </form>
      </body>
    </html>
  `
  response(body, 'text/html');
}

function upload(response, data) {
  response('message: '  + querystring.parse(data).text, 'text/plain')
}

function show(response, data) {
  fs.readFile('/tmp/test.png', 'binary', function(err, file) {
    if (error) {
      response(err + '\n');
    } else {
      response(file, 'binary')
    }
  })
}

module.exports = {
  start,
  upload,
  show
}