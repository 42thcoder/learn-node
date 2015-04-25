var express = require('express'),
    utility = require('utility');

var app = express();

app.get('/', function (request, response) {
    var q = request.query.q;

    response.send(utility.md5(q) + ' | ' + utility.sha1(q));
});

app.listen(3001, function(){
    console.log('app is listening at port 3001');
});