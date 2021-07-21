var fs = require('fs'),
    http = require('http');

http.createServer(function(req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Home Page');
        res.end();
    } else if (req.url === '/users') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Danh sach user');
        res.end();
    } else if (req.url === '/admins') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Danh sach admin');
        res.end();
    } else {
        fs.readFile(__dirname + req.url, function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            } else {
                res.write(data)
                res.end();
            }
        });
    }

}).listen(3000);