var url = require('url'),
    superagent = require('superagent'),
    cheerio = require('cheerio'),
    EventProxy = require('eventproxy');

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

        var ep = new EventProxy();
        ep.after('fetch_comment_done', topicUrls.length, function(topics){
            console.log('final:');


            topics = topics.map(function(topicPair){
                var topicUrl = topicPair[0],
                    topicHtml = topicPair[1],
                    $ = cheerio.load(topicHtml);
                return {
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    first_comment: $('.reply_content').eq(0).text().trim()
                };
            });

            console.log(topics);
        });

        topicUrls.forEach(function(topicUrl){
            superagent.get(topicUrl).end(function(error, data){
                console.log('fetch ' + topicUrl);
                ep.emit('fetch_comment_done', [topicUrl, data.text]);
            });
        });
    });

