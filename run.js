'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var watch = require('metalsmith-watch');
var handlebars = require('handlebars');
var config = require('./config');

module.exports = function() {
    metalsmith('./')
        .source(config.src.content)
        .use(markdown())
        .use(layouts({
            engine: 'handlebars',
            directory: config.src.layout,
            partials: config.src.partials
        }))
        .destination(config.dist)
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
