const { env } = require('process');

const target = env.PORT || 'https://localhost:3001';

const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    },
    pathRewrite: {
      "^/api": ""
    }
  }
]

module.exports = PROXY_CONFIG;
