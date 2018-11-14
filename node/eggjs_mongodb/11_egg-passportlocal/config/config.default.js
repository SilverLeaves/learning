'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1537860034309_9102';

  // add your config here
  config.middleware = [];

  config.passportLocal = {
    usernameField: 'admin',
    passwordField: '123',
  };

  return config;
};
