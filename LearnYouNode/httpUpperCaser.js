var http = require('http');
var fs = require('fs');

var port = process.argv[2];

var server = http.createServer(function(req, res) {
    var upperCased = '';
    if(req.method === 'POST') {
        req.on('data',function(data) {
            upperCased += data.toString().toUpperCase();
//            console.log(data.toString().toUpperCase());
        });
    }
    req.on('error', console.error);
    req.on('end', function(){
       res.end(upperCased)
//        console.log(upperCased);
    } );
});
server.listen(port);