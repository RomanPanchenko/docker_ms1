const { getUser } = require('./controller');

module.exports = (router) => {
  router.get('/user', getUser);
};