const http = require('http'), fs = require("fs");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req,res) {
  var path = req.url.toLowerCase();
  switch(path) {
    case '/':
      fs.readFile(__dirname + "/html/home.html" , function(err, data) {
		  res.writeHead(200, {'Content-Type': 'text/html'});
		  res.end(data);
			}
		);
	  break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is the About page');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Error 404: Page Not found');
      break;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

