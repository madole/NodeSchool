var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLoc = process.argv[3];

var server = http.createServer(function(req, res) {
    var readStream = fs.createReadStream(fileLoc);
    readStream.pipe(res);
});
server.listen(port);