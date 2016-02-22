'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var watch = require('metalsmith-watch');
var handlebars = require('handlebars');

module.exports = function() {

    metalsmith('./')
        .source('src/html/content')
        .use(markdown())
        .use(layouts({
            engine: 'handlebars',
            directory: 'src/html/layouts',
            partials: 'src/html/layouts/partials'
        }))
        .destination('dist/site')
        .use(watch({
            paths: {
                '${source}/**/*': '**/*',
                'src/html/layouts/**/*': '**/*'
            },
            livereload: true
        }))
        .build(function(err) {
          if (err) throw err;
          console.log('Build finished!');
        });
}
