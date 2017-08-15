const forever = require('async/forever');
const redisClient = require('./redis');

const DELAY_TIME = 5000;

const task = (next) => {
  setTimeout(() => {
    const date = Date.now();
    redisClient.lpush('dates', date);
    console.log('Date : ', redisClient.lpop('dates'));
    next();
  }, DELAY_TIME);
};

forever(task, (err) => {
  console.error(err.message, err, err.stack);
});
