var fs = require('fs');
var pathName = process.argv[2];
var filter = process.argv[3];
fs.readdir(pathName, function(err, list) {
	for(var item in list) {
		var listItem = list[item];
		if(listItem.indexOf(filter) !== -1) {
			console.log(listItem);
		}
	}
});

