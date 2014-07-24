/**
 * Created by Madole on 24/07/2014.
 */
var spawn = require('child_process').spawn;
var duplex = require('duplexer');


module.exports = function(cmd, args) {
    var childProcess = spawn(cmd,args);
    return duplex(childProcess.stdin, childProcess.stdout);
}