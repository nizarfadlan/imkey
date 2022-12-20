/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  // pwa: {
  //   dest: 'public',
  //   sw: 'service-worker.js',
  //   disable: process.env.APP_ENV === 'development',
  //   runtimeCaching,
  //   buildExcludes: [/_middleware\.js\.map$/, /chunks\/images\/.*$/, /chunks\/pages\/api\/.*/],
  //   exclude: [/\.map$/, /^.*ts.*$/, /-manifest.json$/],
  //   publicExcludes: ['!robots.txt', '!noprecache/**/*'],
  // },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

// module.exports = withPWA(nextConfig, withPlugins([
//   [withTM],
// ]))

module.exports = nextConfig
