var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
function callback(err,list){
	for(var x=0; x<list.length; ++x){
		if(path.extname(list[x])==='.' + ext){
			console.log(list[x]);
		}
	}
};

fs.readdir(dir, callback );