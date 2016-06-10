/**
 * Main application file
 */

'use strict';

import express from 'express';
import config from './config/environment';
import http from 'http';
import mongoose from 'mongoose';

// Setup server
var app = express();
var server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Connect mongo
mongoose.connect(config.mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error: ' + config.mongoURI));
db.once('open', function() {
  console.log('DB connection success! ' + config.mongoURI);
});

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
