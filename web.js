var express = require('express');

var app = express.createServer(express.logger());

//read data from a file, copy it into a buffer, convert that into a string,
var index = fs.readFileSync(index.html);//read data from a file

app.get('/', function(request, response) {
  response.send(index.toString(););
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
