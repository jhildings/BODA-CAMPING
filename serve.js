var http = require('http'),
        ms = require('mediaserver');

http.createServer(function (req, res) {

	    ms.pipe(req, res, "music.mp3");

}).listen(1337, '0.0.0.0');
console.log("running")
