var request = require('request');
var cheerio = require('cheerio');
var common = require('./common');
var consts = require("./const");
var startUrls = consts.PH_TYPES;

for (var index in startUrls) {
    var url = startUrls[index];
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var html = cheerio.load(body);
            var div = html.select("div.phimage");
            console.info(div.length);
            for (var dindex in div) {
                console.info(div[dindex].html());
            }
        }
    })
}