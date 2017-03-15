var express = require('express');
var request =  require('request');
var app = express();
var http = require("http");
var https = require("https");

app.get('/', function (req, res) {
   res.send('This is scraper. Hi.');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Scraper running on http://%s:%s", host, port)
});

app.get('/scrape', function(req, res) {
    if (req.query) {
        request(req.query, function(error, response, html){
            res.render('scraped.jade', {
            html: html
            });
        });
    }
});



