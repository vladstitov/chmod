var fs = require('fs');
var exec = require('child_process').exec;


var paths=['/wmata','/tomcat'];

var DELAY_MIN=5;
var MODE=0777;

var changemode = function (){
	for(var i=0,n=paths.length;i<n;i++){
		var folder = paths[i];
		var cmd='';
		exec(cmd,function(error, stdout, stderr){
		if (error !== null)console.log('exec error: ' + error);
		});
	}
	
}

setInterval(changemode,DELAY_MIN*60*1000);
changemode();