var through = require('through2');
var split = require('split');

var count = 1;

var stream = through(function (line, _, next) {
    var lineString = line.toString();

    var transformed = (count % 2 === 0) ? lineString.toUpperCase() : lineString.toLowerCase();

    this.push(transformed + '\n');
    count++;

    next();
});

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout);

