// Create web server
// Create a web server that listens on port 3000. The server should respond to a request to /comments with an array of comments. Each comment should have a message and an author key.

var express = require('express');
var app = express();

app.get('/comments', function (req, res) {
  res.json([
    { message: 'hello', author: 'John' },
    { message: 'hi', author: 'Jane' }
  ]);
});

app.listen(3000);