const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.deploy'),
});

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/EgoBrainProgrammer/nodejs-mesto-frontend.git',
      path: DEPLOY_PATH,
      'post-deploy': 'npm i && npm run build',
    },
  },
};
