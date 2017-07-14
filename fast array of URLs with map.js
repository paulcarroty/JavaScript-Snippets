APIs = [ '/development/page/2/', '/development/page/3/', '/development/page/4/' ];
var host = 'website.com';
var urls = APIs.map(function (api) {
  return 'http://' + host + api;
});

console.log(urls);

// [ 'http://website.com/development/page/2/',
//  'http://website.com/development/page/3/',
//  'http://website.com/development/page/4/' ]
