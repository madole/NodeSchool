var duplex = require('duplexer');
var through = require('through');

module.exports = function(counter) {
   var counts = {};
   var countryCounter = through(write, end);

    function write(obj) {
        if(typeof counts[obj.country] == 'number') {
            counts[obj.country]++;
        }else{
            counts[obj.country] = 1;
        }
    }

    function end() {
        counter.setCounts(counts);
    }

    return duplex(countryCounter, counter);
}

