module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      ],
    });

    return config;
  },
};
