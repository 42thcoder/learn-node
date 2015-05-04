#!/usr/bin/env node

// npm link 不报错, 但是不起作用
//  var greet = require('greet');
var greet = require('../');

greet(process.argv);

