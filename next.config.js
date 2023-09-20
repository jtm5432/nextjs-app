/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    webpack: (config, { dev, isServer }) => {
      // 프로덕션 환경에서만 실행
      if (!dev) {
        config.module.rules.push({
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                'babel-plugin-react-remove-properties', 
                { properties: ['data-testid'] }
              ]
            ],
            compact: false,
          }
        });
      }
  
      return config;
    }
  };
  
  module.exports = nextConfig;
  