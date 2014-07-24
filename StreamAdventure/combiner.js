/**
 * Created by Madole on 24/07/2014.
 */
var combine = require('stream-combiner');
var split   = require('split');
var through = require('through');
var zlib    = require('zlib');
var nl      = require('./newLine.js');
var current;

function sorter() {
   return  through(write, end);
}

function write(buff) {
    if(!buff) { return; }
    var parsedObj = JSON.parse(buff);
    if(parsedObj.type === 'genre') {
        if(current) {
            this.queue(nl(JSON.stringify(current)));
        }
        current = {
            name: parsedObj.name,
            books: []
        }
    } else {
        current.books.push(parsedObj.name);
    }
}

function end() {
    this.queue(nl(JSON.stringify(current)));
    this.queue(null);
}
module.exports = function() {
    return combine(split(), sorter(), zlib.createGzip());
}
