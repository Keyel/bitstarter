var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var indexFile = fs.readFileSync('index.html');
	var indexStrng = indexFile.toString();

  response.send(indexStrng);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});