var Queue = require('./queue');
var Job = require('./job');
var redis = require('./redis');

exports.redis = redis;

exports.createQueue = function(name){
  var q = new Queue(name);
  q.client = exports.redis.createClient();
  return q;
};

exports.Job = Job;