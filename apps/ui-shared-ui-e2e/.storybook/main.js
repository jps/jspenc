const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...(rootMain.addons || [])],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
