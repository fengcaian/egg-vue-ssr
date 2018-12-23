'use strict';
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: [ 'app/web/page', { 'app/app': 'app/web/page/app/app.js?loader=false' }],
    exclude: [ 'app/web/page/[a-z]+/component', 'app/web/page/test', 'app/web/page/html', 'app/web/page/app' ],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    },
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
  },
  loaders: {
    eslint: false,
    less: false, // 没有使用, 禁用可以减少npm install安装时间
    stylus: false, // 没有使用, 禁用可以减少npm install安装时间
  },
  plugins: {
    provide: false,
    define: {
      args() { // 支持函数, 这里仅做演示测试,isNode无实际作用
        return {
          isNode: this.ssr,
        }; 
      },
    },
    commonsChunk: {
      args: {
        minChunks: 5,
      },
    },
    uglifyJs: {
      args: {
        compress: {
          warnings: false,
        },
      },
    },
  },
};
