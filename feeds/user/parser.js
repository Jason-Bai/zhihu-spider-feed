const pick = require('lodash/pick');
const omit = require('lodash/omit');
const config = require('./config');
const { columns, bool2int, obj2string, map } = config.profile;

function profile(data) {
  let pickedProfile = pick(data, columns);
  bool2int.forEach((key) => {
    pickedProfile[key] = pickedProfile[key] ? 1 : 0;
  });
  obj2string.forEach((key) => {
    pickedProfile[key] = JSON.stringify(pickedProfile[key]);
  });
  map.forEach(([ from, to ]) => {
    pickedProfile[to] = pickedProfile[from];
    pickedProfile = omit(pickedProfile, from);
  });
  return pickedProfile;
}

exports.profile = profile;
