// console.log("HELLO WORLD");
// console.log(process.argv)

// <<<<<<<<<<<<<<<----Challenge 2------>>>>>>>>>>>>>>>>>>>

// var sum = 0;

// for (var i = 2; i < process.argv.length; i++) {
// 	sum += Number(process.argv[i]);
	
// }
// console.log(sum);

// <<<<<<<<------Challenge 3------>>>>>>>>>>>>>>>>>>>>>>

// var fs = require("fs");
// var data = fs.readFileSync(process.argv[2]);
// var str = data.toString();
// var newLine = str.split("\n");
// console.log(newLine.length-1);

// >>>>>>>>>>>------Challenge 4------>>>>>>>>>>>>>>>>>>>>>>>

// var fs = require ("fs")

// fs.readFile(process.argv[2], function(err, data){
// 	if(err) throw err;
// 	var str = data.toString();
// 	var newLineArray = str.split("\n");
// 	var countOfLines = newLineArray.length-1;
// 	console.log(countOfLines);
// })

// >>>>>>>>>>>------Challenge 5------>>>>>>>>>>>>>>>>>>>>>>>

// var fs = require ("fs");
// var path = require("path");
// var folder = process.argv[2];
// var ext = "."+ process.argv[3];
// //console.log(process.argv);

// fs.readdir(folder, function(err, list){
// 	if(err) throw err;	
// 	//console.log(list)	
// 	for (var i = 0; i < list.length; i++) {		
// 		if(path.extname(list[i])===ext){
// 			console.log(list[i]);
// 		}		
// 	}
// })

// >>>>>>>>>>>------Challenge 6------>>>>>>>>>>>>>>>>>>>>>>>

// var http = require("http");
// // console.log(process.argv)

// http.get(process.argv[2], function (response) {
//   //console.log("Got response: " + res.statusCode);
// 	  response.on('data', function(content) {
// 	     console.log(content.toString());
// 	  })
// })


// >>>>>>>>>>>------Challenge 7------>>>>>>>>>>>>>>>>>>>>>>>

// var http = require("http");
// var bl = require("bl")

// http.get(process.argv[2], function(response){
// 	response.pipe(bl(function(err, data){
// 		console.log(data.toString().split("").length)
// 		console.log(data.toString())
// 	}))
// })

// >>>>>>>>>>>------Challenge 8------>>>>>>>>>>>>>>>>>>>>>>>

var http = require('http');    
var bl = require ("bl")
var urls = [process.argv[2], process.argv[3], process.argv[4]]


http.get(process.argv[2], function(response){
	response.pipe(bl(function(err, data){		
		console.log(data.toString())
	}))
})
http.get(process.argv[3], function(response){
	response.pipe(bl(function(err, data){		
		console.log(data.toString())
	}))
})
http.get(process.argv[4], function(response){
	response.pipe(bl(function(err, data){		
		console.log(data.toString())
	}))
})


