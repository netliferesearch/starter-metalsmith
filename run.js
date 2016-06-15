'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var inplace = require('metalsmith-in-place');
var watch = require('metalsmith-watch');
var handlebars = require('handlebars');
var jade = require('jade');
var twig = require('twig');

var config = require('./config');

module.exports = function(language) {
    metalsmith('./')
        .source(config.src.content)
        .use(markdown())
        .use(layouts({
            engine: language,
            directory: config.src.layout,
            partials: config.src.partials
        }))
        .use(inplace({
            engine: language,
            partials:  config.src.partials
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
