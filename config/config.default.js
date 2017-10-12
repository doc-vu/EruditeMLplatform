'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
config.server.port = 7070;
// config.mongo.uri = 'mongodb://127.0.0.1:27017/webgme_my_app';
config.authentication.allowUserRegistration = true
config.authentication.enable = true
config.authentication.allowGuests = true

// Plugins
config.plugin.allowServerExecution = true;
config.plugin.allowBrowserExecution = true;

// Seeds
config.seedProjects.enable = true;
config.seedProjects.defaultProject = 'Erudite';
config.seedProjects.basePaths.push("./src/seeds");

// UI
//config.visualization.layout.default = 'SidebarLayout';
config.executor.enable = true;
config.executor.enable = true;
config.executor.clearOldDataAtStartUp = true;
config.visualization.svgDirs = ['./icons/png'];

config.visualization.decoratorPaths.push('./src/decorators');

validateConfig(config);
module.exports = config;
