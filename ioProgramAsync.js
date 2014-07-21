var fs = require('fs');
var string = '';
fs.readFile('/home/amcdowell/Desktop/buildDeploy.sh', function(err, buff){
	if(err) {return;}
	string = buff.toString();
	console.log(string);
});


