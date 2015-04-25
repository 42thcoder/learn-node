var url = require('url'),
    superagent = require('superagent'),
    cheerio = require('cheerio');

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
    .end(function (error, data) {
        if (error) {
            return console.error(error);
        }

        var topicUrls = [];
        var $ = cheerio.load(data.text);
        $('#topic_list .topic_title').each(function (index, element) {
            var $element = $(element);

            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });

        console.log(topicUrls);
    });