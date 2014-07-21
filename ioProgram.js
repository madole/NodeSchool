var fs = require('fs');
var buffer = fs.readFileSync('/home/amcdowell/Desktop/buildDeploy.sh');
var string = buffer.toString();
console.log(string);
