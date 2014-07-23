var through = require('through');

process.stdin.pipe(through(write,end)).pipe(process.stdout);

function write(buff) {
    var str = buff.toString().toUpperCase()
    this.queue(str);
}

function end() {
    this.queue(null);
}