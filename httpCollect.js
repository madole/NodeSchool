var bl = require('bl');
var http = require('http');

var url = process.argv[2];


http.get(url, function(response){
    response.pipe(bl(function(err, data){
        console.log(data.toString().split('').length);
        console.log(data.toString());
    }));
    response.on('error', console.error);
});

