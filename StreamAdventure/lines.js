/**
 * Created by Madole on 23/07/2014.
 */
var through = require('through');
var split = require('split');
var i = 1;
process.stdin
    .pipe(split())
    .pipe(through(write,end))
    .pipe(process.stdout);

function write(buff) {
    var str = '';
    if(i%2===0) {
        str = buff.toString().toUpperCase();
    }else{
        str = buff.toString().toLowerCase();
    }
    i++;
    this.queue(str+'\n');
}

function end() {
    this.queue(null);
}