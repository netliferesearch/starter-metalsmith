'use strict';

var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var watch = require('metalsmith-watch');
var handlebars = require('handlebars');
var config = require('./config');

module.exports = {
    run: require('./run'),
    extendConfig: require('./extend-config')
};
