var fs = require('fs');

var paths=['/wmata','/tomcat'];

var DELAY_MIN=5;
var MODE=0777;

var changemode = function (){
	for(var i=0,n=paths.length;i<n;i++)	fs.chmod(paths[i],MODE,function(err){ if(err)console.log(err);});
	}

setInterval(changemode,DELAY_MIN*60*1000);
changemode();