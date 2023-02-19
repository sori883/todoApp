/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = {
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
  const config = withInterceptStdout(
    {
      ...nextConfig
    },
    (text) => (text.includes('Duplicate atom key') ? '' : text),
  );
  return config;
};


module.exports = buildConfig();