var RSS = require('rss');

/* lets create an rss feed */
var feed = new RSS({
    title: 'earbud.fm',
    description: 'description',
    feed_url: '',
    site_url: 'http://earbud.fm',
    image_url: 'http://example.com/icon.png',
    docs: 'http://example.com/rss/docs.html',
    managingEditor: 'Dylan Greene',
    webMaster: 'Dylan Greene',
    copyright: '2013 Dylan Greene',
    language: 'en',
    categories: ['Category 1','Category 2','Category 3'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
    custom_namespaces: {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      {'itunes:subtitle': 'A show about everything'},
      {'itunes:author': 'John Doe'},
      {'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store'},
      {'itunes:owner': [
        {'itunes:name': 'John Doe'},
        {'itunes:email': 'john.doe@example.com'}
      ]},
      {'itunes:image': {
        _attr: {
          href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
        }
      }},
      {'itunes:category': [
        {_attr: {
          text: 'Technology'
        }},
        {'itunes:category': {
          _attr: {
            text: 'Gadgets'
          }
        }}
      ]}
    ]
});

var podcasts = require('./output/podcasts.json').podcasts;

podcasts.forEach(function(element, index, array) {
  var title = element && element.episode;
  var mp3 = element.mp3;

  /* loop over data and add to feed */
    feed.item({
    title: title,
    description: 'use this for the content. It can include html.',
      url: 'http://example.com/article4?this&that', // link to the item
      guid: '1123', // optional - defaults to url
    categories: ['Category 1','Category 2','Category 3','Category 4'], // optional - array of item categories
    author: 'Guest Author', // optional - defaults to feed author property
    date: 'May 27, 2012', // any format that js Date can parse.
      lat: 33.417974, //optional latitude field for GeoRSS
    long: -111.933231, //optional longitude field for GeoRSS
      enclosure: {
      url: mp3,
      type: 'audio/mpeg'
    },
    custom_elements: [
      {'itunes:author': 'John Doe'},
      {'itunes:subtitle': 'A short primer on table spices'},
      {'itunes:image': {
        _attr: {
          href: 'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg'
        }
      }},
      {'itunes:duration': '7:04'}
    ]
  });
});

// cache the xml to send to clients
var xml = feed.xml();

var path = './output/podcasts.xml';
var content = xml;

var fs = require('fs');
fs.writeFile(path, content, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
