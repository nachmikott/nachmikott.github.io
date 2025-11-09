const path = require('path');

class WatchExternalFilesPlugin {
  constructor(files = []) {
    this.files = files;
  }

  apply(compiler) {
    compiler.hooks.afterCompile.tap('WatchExternalFilesPlugin', (compilation) => {
      this.files.forEach((file) => {
        compilation.fileDependencies.add(file);
      });
    });
  }
}

const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (isServer) {
      const projectsFile = path.resolve(__dirname, 'projects.yaml');
      config.plugins.push(new WatchExternalFilesPlugin([projectsFile]));
    }

    return config;
  },
}

module.exports = nextConfig
