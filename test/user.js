const UserFeed = require('../feeds/user');
const users = require('../mock/users');

UserFeed.sync('feifeimao').then((res) => {
  console.log('Success : ', res);
}).catch((err) => {
  console.log('Error : ', err);
});
