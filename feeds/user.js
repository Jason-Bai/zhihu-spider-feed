const API = require('./api');

function UserFeed() {}

function profile(username) {
  if (!username || !username.length) {
    return Promise.reject(Error('no username!'));
  }
  return API.user(username).profile();
}

UserFeed.profile = (usernames = []) => {
  if (!usernames) {
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

module.exports = UserFeed;
