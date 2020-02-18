let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms');
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    });

})();