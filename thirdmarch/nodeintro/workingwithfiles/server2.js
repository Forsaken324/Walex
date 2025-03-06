var http = require('http')
var url = require('url')



const port = 8000;
const host = '127.0.0.1'

http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Welcome!');
    // username = url.parse(req.url, true).query;
    // res.write(username)
    res.end();
}).listen(port, host, () => {
    console.log(`The server is running at http://${host}:${port}/`);
});

// res and req stands for response and request respectively.

