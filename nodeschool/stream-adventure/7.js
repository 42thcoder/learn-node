var http = require('http');
var through = require('through2');


var server = http.createServer(function (request, response) {
    function write(buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());

        next();
    }

    function end(done) {
        done();
    }

    request.pipe(through(write, end)).pipe(response);
});

server.listen(process.argv[2] || 5000);