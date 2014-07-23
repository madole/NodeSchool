/**
 * Created by Madole on 24/07/2014.
 */
var request = require('request');

var url = 'http://localhost:8000';

var r = request.post(url);

process.stdin.pipe(r).pipe(process.stdout);