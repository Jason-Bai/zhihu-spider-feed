const API = require('../api');
const parser = require('./parser');
const db = require('../../db');

function User() {}

function profile(username) {
  if (!username || !username.length) {
    return Promise.reject(Error('no username!'));
  }
  return API.user(username).profile();
}

User.profile = (usernames = []) => { if (!usernames) {
    return Promise.reject(Error('no usernames'));
  }
if (typeof usernames === 'string') {
    usernames = [usernames];
  }

  if (!usernames.length) {
    return Promise.reject(Error('no usernames'));
  }

  const promises = usernames.map(profile);

  return Promise.all(promises);
};

function sync(username) {
	return profile(username).then((people) => {
    const newPeople = parser.profile(people);
    console.log(JSON.stringify(newPeople));
    return db.insert('people', newPeople);
	});
}

User.sync = sync;

module.exports = User;
