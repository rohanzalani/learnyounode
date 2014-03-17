var fs = require('fs');
var file = process.argv[2];

function callback(err,data){
console.log(data.toString().split('\n').length-1);
};

var buf = fs.readFile(file,callback);
