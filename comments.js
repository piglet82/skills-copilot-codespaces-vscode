// Create web server
// Create a web server that listens on port 3000. The server should respond to a request to /comments with an array of comments. Each comment should have a message and an author key.

var express = require('express');
var app = express();

app.get('/comments', function (req, res) {
  res.json([
    { message: 'hello', author: 'John' },
    { message: 'hi', author: 'Jane' },
    { message: 'hi2', author: 'Jane2' }
  ]);
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

var request = require('supertest');
request(app)
  .get('/comments')
  .expect('Content-Type', /json/)
  .expect(200)
  .expect(function(res) {
    if (!res.body.some(commentx => commentx.message === 'hello' && commentx.author === 'John')) {
      throw new Error('Expected comment not found');
    }
  })
  .end(function(err, res) {
    if (err) {
      throw err;
    }
    console.log(res.body);
  });
