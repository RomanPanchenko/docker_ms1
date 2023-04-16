const app = require('express')();
const router = require('express-promise-router')();
const { Logger } = require('./di').container;
app.use((req, res, next) => {
  let message;
  const acceptEncodingIndex = req.rawHeaders.findIndex(p => p === 'accept-encoding');
  if (acceptEncodingIndex >= 0) {
    if (req.rawHeaders[acceptEncodingIndex + 1] === 'gzip, deflate') {
      message = `${req.method}: ${req.url}`;
      Logger.debug(message);
      return next();
    }
  }

  message = `${req.method}: ${req.url}`;
  if (req.params && typeof req.params === 'object' && Object.keys(req.params).length) {
    message += `\n params: ${JSON.stringify(req.params)}`;
  }

  if (req.query && typeof req.query === 'object' && Object.keys(req.query).length) {
    message += `\n params: ${JSON.stringify(req.query)}`;
  }

  if (req.body && typeof req.body === 'object' && Object.keys(req.body).length) {
    message += `\n params: ${JSON.stringify(req.body)}`;
  }

  Logger.debug(message);

  next();
});

app.get('/status', (req, res) => res.status(200).send('Status is OK'));
app.use(router);
require('./components/user/api')(router);

module.exports = app;