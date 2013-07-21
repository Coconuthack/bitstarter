var express = require('express');

var app = express.createServer(express.logger());

//read data from a file, copy it into a buffer, convert that into a string,
var buffy = new buffer(fs.readFileSync("index.html"));//read data from a file
var str = buffy.toString();

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
