/**
 * Created by Madole on 24/07/2014.
 */
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');

stream.end('hello\n');