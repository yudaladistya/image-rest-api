var express = require('express');
var app = express();

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

var fs = require('fs'),
    http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res) {
  let path = url.parse(req.url, true).query.path;

  // BAD: This could read any file on the file system
  res.write(fs.readFileSync(path));

  // BAD: This could still read any file on the file system
  res.write(fs.readFileSync("/public/index.html" + path));
});
