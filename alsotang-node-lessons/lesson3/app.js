var express = require('express'),
    superagent = require('superagent'),
    cheerio = require('cheerio');

var app = express();

app.get('/', function (request, response, next) {
    superagent.get('https://cnodejs.org/')
        .end(function (error, data) {
            if (error) {
                return next(error);
            }

            var $ = cheerio.load(data.text),
                items = [];
            $('#topic_list .topic_title').each(function(index, element){
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });

            response.send(items);
        });
});

app.get('/test', function(resquest, response, next){
   response.send('test');
});

app.listen(3001, function () {
    console.log('app is listening at port 3001');
});