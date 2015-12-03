var earbudUrl = 'http://earbud.fm/';


var page = require('webpage').create();

console.log('Opening ', earbudUrl);

page.open(earbudUrl, function(status) {
  console.log("Status: " + status);

  var PODCASTS = page.evaluate(function() {
    return window.PODCASTS;
  });

  var fs = require('fs');

  var path = './output/podcasts.json';
  var content = JSON.stringify(PODCASTS);

  console.log('Writing file to '+path);

  fs.write(path, content, 'w');

  phantom.exit();
});
