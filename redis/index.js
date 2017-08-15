const redis = require('redis');
const config = require('../config');

const client = redis.createClient(config.redis);

function connect() {
  console.log('connected');
}

function error(err) {
  console.error(err.message, err, err.stack);
}

client.on('connect', connect);

client.on('error', error);

module.exports = client;
