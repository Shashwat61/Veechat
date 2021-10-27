const path=require('path')
const withPWA=require('next-pwa')
const runtimeCaching=require('next-pwa/cache')

module.exports=withPWA({
  pwa:{
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
})
