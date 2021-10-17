const withImages = require('next-images');

module.exports = {
  assetPrefix: '.',
  ...withImages(),
  images: {
    loader: 'custom',
    domains: ['localhost'],
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
    });

    return config;
  },
  // i18n: {
  //   locales: ['en', 'ar'],
  //   defaultLocale: 'en',
  // },
  target: 'serverless',
};
