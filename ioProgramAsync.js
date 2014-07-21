var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function(err, buff){
	if(err) {return;}
	lines = buff.toString().split('\n').length-1;
	console.log(lines);
});


