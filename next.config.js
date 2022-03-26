const path = require('path');
const { spawnSync } = require('child_process');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: '_zero',
  generateBuildId: async () => {
    return spawnSync('git', ['rev-parse', 'HEAD']).stdout.toString().slice(-1, -6);
  },
  optimizeFonts: true,
  webpack: (config, options) => {
    //config.node = false;
    /*config.optimization = {
      concatenateModules: true,
      innerGraph: true,
      mangleExports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: 'production',
      realContentHash: true
    };*/

    return config;
  },
})

module.exports = nextConfig