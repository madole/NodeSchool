/**
 * Created by Madole on 24/07/2014.
 */
var trumpet = require('trumpet');
var fs = require('fs');
var through = require('through');

var tr = trumpet();
var stream = tr.select('.loud').createStream();

stream.pipe(through(function write(buff) {
    this.queue(buff.toString().toUpperCase());
})).pipe(stream)


process.stdin.pipe(tr).pipe(process.stdout);

