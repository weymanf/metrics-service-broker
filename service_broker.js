import express from 'express';

export default () => {
  const app = express();

  if (process.env.NODE_ENV === 'production') {
    const logger = require('bunyan-request-logger')();
    app.use(logger.errorLogger());
    app.use(logger.requestLogger());
  }

  app.enable('trust proxy');

  app.get('/v2/catalog', (req, res) => {
    res.send({});
  });

  return app;
};