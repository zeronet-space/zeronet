const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: '_zero',
  generateBuildId: async () => {
    return 'my-build-id'
  },
  optimizeFonts: true
}

module.exports = nextConfig