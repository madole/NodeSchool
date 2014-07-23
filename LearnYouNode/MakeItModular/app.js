var filterDirectory = require('./filterDirectory.js');

var pathName = process.argv[2];
var filter = process.argv[3];

filterDirectory(pathName, filter, function(err, data) {
	if(err) {
		console.log(err);
		return; 
	}
	for(var i in data) {
		console.log(data[i]);
	}


});