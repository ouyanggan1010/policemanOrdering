// 时间戳保证不会版本重复
const Timestamp = new Date().getTime();

module.exports = {
  //不打包map文件
  productionSourceMap: false,
  configureWebpack: {
    // webpack 配置
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
    },
  },
  publicPath:
    //生产环境的时候，也就是npm run build，静态文件的引用路径是/m
    process.env.NODE_ENV === "production" ? "/m" : "/",
  // 当遇到跨域请求的时候，需要请求代理
  devServer: {
    proxy: {
      "/myapi": {
        target: process.env.VUE_APP_API_URL_TARGET, //API服务器的地址
        ws: true, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          "^/myapi": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "微食堂";
      return args;
    });
  },
  // 修改框架vant的默认样式
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            "nav-bar-background-color": "#00b96b",
            "nav-bar-height": "58px",
            "nav-bar-title-text-color": "#fff",
            "nav-bar-title-font-size": "19px",
            "nav-bar-text-color": "#fff",
            "nav-bar-arrow-size":"11px"
          },
        },
      },
    },
  },
};
