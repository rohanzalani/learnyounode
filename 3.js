var inputs = process.argv;
var fs = require('fs');

var buf = fs.readFileSync(inputs[2]).toString().split('\n');

console.log(buf.length-1);


