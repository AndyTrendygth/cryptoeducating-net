
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  optimizeFonts: true,
  experimental:{
    nextScriptWorkers:true
  }
}

module.exports = nextConfig
