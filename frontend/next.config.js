/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Other configuration options
  // This handles .ts and .tsx files outside of the Next.js directory! 👇🏻
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      exclude: /node_modules/,
    })

    return config
  },
}

module.exports = nextConfig
