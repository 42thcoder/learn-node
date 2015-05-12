var request = require('request');
var targetUrl = 'http://localhost:8099';

process.stdin.pipe(request.post(targetUrl)).pipe(process.stdout);