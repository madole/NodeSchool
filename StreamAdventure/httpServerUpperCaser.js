var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res) {
    if(req.method === 'POST') {
        req.pipe(through(function(buffer) {
           this.queue(buffer.toString().toUpperCase());
        })).pipe(res);
    }
    res.end();
});

server.listen(process.argv[2]);