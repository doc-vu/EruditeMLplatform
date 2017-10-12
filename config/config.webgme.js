// DO NOT EDIT THIS FILE
// This file is automatically generated from the webgme-setup-tool.
'use strict';


var config = require('webgme/config/config.default'),
    validateConfig = require('webgme/config/validator');

// The paths can be loaded from the webgme-setup.json
config.plugin.basePaths.push(__dirname + '/../src/plugins');
//config.visualization.layout.basePaths.push(__dirname + '/../node_modules/webgme-chflayout/src/layouts');
config.visualization.decoratorPaths.push(__dirname + '/../src/decorators');



config.visualization.panelPaths.push(__dirname + '/../node_modules/webgme-fab/src/visualizers/panels');
config.visualization.panelPaths.push(__dirname + '/../src/visualizers/panels');




// Visualizer descriptors
config.visualization.visualizerDescriptors.push(__dirname + '/../src/visualizers/Visualizers.json');
// Add requirejs paths
config.requirejsPaths = {
  'CHFLayout': 'node_modules/webgme-chflayout/src/layouts/CHFLayout',
  'FloatingActionButton': 'panels/FloatingActionButton/FloatingActionButtonPanel',
  'panels': './src/visualizers/panels',
  'widgets': './src/visualizers/widgets',
  'panels/FloatingActionButton': './node_modules/webgme-fab/src/visualizers/panels/FloatingActionButton',
  'widgets/FloatingActionButton': './node_modules/webgme-fab/src/visualizers/widgets/FloatingActionButton'
};

//config.visualization.layout.default = 'CHFLayout';
config.mongo.uri = 'mongodb://127.0.0.1:27017/ml';
validateConfig(config);
module.exports = config;