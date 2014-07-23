var concat = require('concat-stream');

process.stdin.pipe(concat(function(data) {

    var ret =  data.toString().split('').reverse().join('');
    console.log(ret);
    return ret;
})).pipe(process.stdout);

