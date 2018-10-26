const server = require('./server');
const route = require('./router');
const requireHandler = require('./requestHandlers');
let handle = {
  '/': requireHandler.start,
  '/start': requireHandler.start,
  '/upload': requireHandler.upload,
  "/show": requireHandler.show
}
server.start(route, handle)