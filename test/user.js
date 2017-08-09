const UserFeed = require('../feeds/user');
const users = require('../mock/users');

UserFeed.profile('zhang-jia-wei').then((userInfos) => {
  console.log('Success : ', userInfos.length);
  const [ first ] = userInfos;
  console.log(first);
}).catch((err) => {
  console.log('Error : ', err);
});
