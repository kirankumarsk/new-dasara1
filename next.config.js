const { Output } = require('@mui/icons-material');

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
};

const env = {
  AUTH_TOKEN: process.env.AUTH_TOKEN,
};

module.exports = {
  ...nextConfig, // Include nextConfig properties
  env, // Include env properties
  images: {
    remotePatterns: [{
      protocol: "https",
        hostname: "imagedelivery.net",
  },
  {
    protocol: "https",
      hostname: "res.cloudinary.com",
}]
  },
  output: "standalone",
  reactStrictMode: false
};
