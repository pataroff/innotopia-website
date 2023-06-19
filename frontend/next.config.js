/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This fixes the error related to defaultDocumentNode.ts, but it breaks /pages/_document.tsx!

  // // Other configuration options
  // // This handles .ts and .tsx files outside of the Next.js directory! 👇🏻
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     use: {
  //       loader: 'ts-loader',
  //       options: {
  //         transpileOnly: true,
  //       },
  //     },
  //     exclude: /node_modules/,
  //   })

  //   return config
  // },
}

module.exports = nextConfig
