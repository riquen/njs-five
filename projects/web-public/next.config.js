const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@njs-five/design-system',
  '@njs-five/utils',
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
})
