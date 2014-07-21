var fs = require('fs');
var pathName = process.argv[2];
var filter = process.argv[3];
fs.readdir(pathName, function(err, list) {
	if(err) {
		console.log(err);
	}
	for(var i=0, l=list.length; i<l; i++) {
		var listItem = list[i];
		if(listItem.indexOf('.'+filter) !== -1) {
			console.log(listItem);
		}
	}
});

