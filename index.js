const fs = require('fs');
const http = require('http');
const finalHandler = require('finalhandler')
const serveStatic = require('serve-static');

const port = process.env.PORT || '4444';
const host = process.env.IP || '127.0.0.1';

var serve = serveStatic(__dirname, {'index': ['tests/runner.html']})

http.createServer(function (req, res) {
  var done = finalHandler(req, res);
  serve(req, res, done);
}).listen(port, host);

var f= fs.readFileSync(__dirname + '/help.txt', 'utf8');
console.log(f.replace('{{host}}', host).replace('{{port}}', port));
console.log('Server running %s:%d...', host, port);
