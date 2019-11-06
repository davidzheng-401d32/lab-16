'use strict';

const EventEmitter = require('./events');

EventEmitter.on('file-read', () => {
  console.log('file is read');
});

EventEmitter.on('capitalize', () => {
  console.log('file is capitalized');
});