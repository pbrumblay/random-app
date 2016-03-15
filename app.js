'use strict';
var http = require('http');
var uuid = require('node-uuid');

var srv = http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(uuid.v4());
});
srv.listen(8080);
