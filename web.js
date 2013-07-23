var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var buffy = fs.readFileSync("index.html");//reads and returns buffer for data in file 'index.html'
var str = buffy.toString();

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
