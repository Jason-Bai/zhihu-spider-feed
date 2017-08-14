const forever = require('async/forever');

const DELAY_TIME = 5000;

const task = (next) => {
  setTimeout(() => {
    console.log(Date.now());
    next();
  }, DELAY_TIME);
};

forever(task, (err) => {
  console.error(err.message, err, err.stack);
});
