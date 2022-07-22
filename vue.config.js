const NODE_ENV = 'development' // 打包基础项目更新文档
// const NODE_ENV = 'lib' // 组件库 上传npm

const path = require('path')

// 设置基础选项
const baseConfig = {
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))
        // 将packages和examples加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add('/packages').end()
            .include.add('/examples').end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    css: {
        extract: false,
        loaderOptions: {
            // 给 sass-loader 传递选项 写入scss全局定义
            sass: {
                data: `@import "public/css/shn-vue-ui.scss";`
            }
        },
    }
}

// 文档打包模式
const devConfig = {
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 读取入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    publicPath: '/fhvui/',       // 使用相对路径
    outputDir: 'docker-build/dist',      // 输出文件路径
    ...baseConfig
}

// npm打包模式


module.exports = NODE_ENV === 'development' ? devConfig : devConfig;
