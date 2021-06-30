'use strict'

const _default = {
  development: process.env.NODE_ENV === 'development',
  production: process.env.NODE_ENV === 'production',
  testing: process.env.NODE_ENV === 'testing',
  staging: process.env.NODE_ENV === 'staging'
};

const generateFunction = (conf) => {
  for (let i = 0; i < Object.keys(conf).length; i++) {
    _default[Object.keys(conf)[i]] = process.env.NODE_ENV === conf[Object.keys(conf)[i]];
  }
  return _default;
}

module.exports = generateFunction;
