var express = require("express"),
exec = require("child_process").exec,
port;

var server = express();
server.use(express.static(__dirname + "/public"));
server.listen(port = Number(process.argv.pop()));


//give time for the server to setup
setTimeout(function() {
	exec("open http://localhost:" + port);
}, 500);

