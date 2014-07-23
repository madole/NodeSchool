var net = require('net');
var port = process.argv[2];

function zeroFill(num) {
    return num<10 ? '0'+num : num;
}
var server = net.createServer(function(socket) {
    var date = new Date();
    var month = zeroFill(date.getMonth()+1);
    var day = zeroFill(date.getDate());
    var minutes = zeroFill(date.getMinutes());
    var newDate = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + minutes + '\n';
    socket.write(newDate);
    socket.end();
});
server.listen(port);
