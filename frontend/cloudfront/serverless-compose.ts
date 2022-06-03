import {
  projectName,
} from '@swarmion-starter/serverless-configuration';

const serverlessConfiguration = {
  services: {
    [`${projectName}-frontend`]: {
      type: 'static-website',
      path: '../app/dist',
    },
  },
};

module.exports = serverlessConfiguration;
