// create a web server that listens on port 3000
// The web server should respond to a GET request to /comments
// with a JSON object that represents an array of comments
// Each comment should have a name and a message property
// The name should be a string, and the message should be a string

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  // console.log(req.url);
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.readFile('comments.json', 'utf8', function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Page Not Found');
    res.end();
  }
});

server.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

// Comments.json
// [
//   {
//     "name": "John Doe",
//     "message": "Hello, World!"
//   },
//   {
//     "name": "Jane Doe",
//     "message": "Hi, there!"
//   },
//   {
//     "name": "Jim Doe",
//     "message": "Howdy, y'all!"
//   }
// ]

