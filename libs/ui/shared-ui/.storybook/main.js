const rootMain = require('../../../../.storybook/main');
rootMain.addons.push('@storybook/addon-essentials');
// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)']
);
rootMain.core = { ...rootMain.core, builder: 'webpack5' };

module.exports = rootMain;
