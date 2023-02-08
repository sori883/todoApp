/** @type {import('next').NextConfig} */
const nextConfig =  {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL, 
  },
  swcMinify: true,
  compiler: {
    emotion: true
  }
};

const buildConfig = _phase => {
  const config = {
    ...nextConfig
  };
  return config;
};


module.exports = buildConfig();