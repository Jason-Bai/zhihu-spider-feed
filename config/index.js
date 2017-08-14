const config = require('./config');
const NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = config[NODE_ENV];
