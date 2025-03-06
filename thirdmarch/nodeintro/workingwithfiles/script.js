var http = require('http');
var fs = require('fs');

const host = '127.0.0.1';
const port = 8000;
// fs.readFile is used to read files on your computer

http.createServer(function (req, res) {
    fs.readFile('demofile.html', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(port, host, () => { `The server is running at http://${host}:${port}/` });


fs.appendFile('mynewfile.txt', 'Hello, This is the new content', function (err) {
    // handling exceptions, and throwing an error if an exception occurs. can this be implemented using the try except finally block?
    if (err) throw err;
    console.log('Your information has been saved!');
});


// the fs.open file method takes a flag as the second argument, this flag specifies what operation will be performed on a file.

fs.open('mynewfile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('The file has been saved!');
});

// This overrides what was already on the file.

fs.writeFile('myfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Operation completed');
})


