const fs = require('fs');
const path = require('path');
const API = require('zhihu-api')();

// cookie must be set before any request
API.cookie(fs.readFileSync(path.resolve(__dirname, './cookie')));

module.exports = API;
