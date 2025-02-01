import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // تخصيص إعدادات Webpack للـ production
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        ...config.optimization,
        // تفعيل tree shaking بشكل أقوى في بيئة الإنتاج
        minimize: true,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
        },
      };
    }

    return config;
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
