var fs = require('fs');

module.exports = function(pathName, filterBy, callback) {
	var filteredList = [];
	fs.readdir(pathName, function(err, list) {
		if(err) {
			return callback(err);
		}
		for(var item in list) {
			var listItem = list[item];
			if(listItem.indexOf('.' + filterBy) !== -1) {
				filteredList.push(listItem);
			}
		}
		callback(null, filteredList); 
	});
} 