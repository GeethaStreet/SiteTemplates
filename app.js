var express = require('express');
var request =  require('request');
var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;
var URL = require('url-parse');
var app = express();
var http = require("http");
var https = require("https");
var Regex = require("regex");

var urlRegex = new Regex(/(a|b)*abb/);

function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err);

    fs.writeFile(path, contents, cb);
  });
}

app.get('/', function (req, res) {
   res.send('Hello World! This is Geetha');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Scraper running on http://%s:%s", host, port);
});

app.get('/scrape', function(req, res) {
    if (req.query) {
        var url = new URL(req.query.url);

        request(req.query, function(error, response, html){
            res.render('scraped.jade', {
            html: html
            })

            var path = url.host + '/' + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + '.html';
            writeFile(path, html, function(err){
              console.log('File Written.');
            })
        });
    }
});



