/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  disable: process.env.APP_ENV === 'development',
  runtimeCaching,
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  // pwa: {
  //   dest: 'public',
  //   skipWaiting: true,
  //   disable: process.env.APP_ENV === 'development',
  //   runtimeCaching,
  //   buildExcludes: [/_middleware\.js\.map$/, /chunks\/images\/.*$/, /chunks\/pages\/api\/.*/],
  //   publicExcludes: ['!robots.txt', '!noprecache/**/*'],
  // },
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = withPWA(
  nextConfig,
  withPlugins([
    [withTM],
  ]),
)
