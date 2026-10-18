const http = require('node:http');
const handler = require('./index.cjs');
const port = Number(process.env.PORT || 9090);
http.createServer(handler).listen(port, process.env.HOST || '127.0.0.1', () => {
  console.log(`Comments: http://127.0.0.1:${port}`);
});
