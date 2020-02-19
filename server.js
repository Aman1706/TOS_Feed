let Parser = require('rss-parser');
const express = require('express');
let parser = new Parser();
const port = 3000;

const app = express()

app.set('view engine', 'ejs');

app.get('/news', (req, res) => {
    (async () => {

        let feed = await parser.parseURL('https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms');
        console.log(feed.title);

        feed.items.forEach(item => {
            console.log(item.title + ':' + item.link)
        });

        res.render('index', {
            feed: feed
        });

    })();



})



app.listen(port, function () {
    console.log('listening on port', port)
})