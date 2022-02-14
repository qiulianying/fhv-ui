// 引入公共public中的样式以及公用方法
import '../public/css/result.css'
import '../public/iconfont/iconfont.css'
import '../public/css/flags.css'
import '../public/css/shn-vue-ui-base.css'
import '../public/css/animation.scss'

/*
* 这里需要引入所有的组件，所以建议进行优化处理，需要优化的地方有
* 1、实现组件自动导入，不需要手动import
* 2、实现按需加载
* */

/*
* 组件自动化导入：
require.context(directory, useSubdirectories = false, regExp = /^\.\//)
directory：要搜索的文件夹目录
useSubdirectories：是否还应该搜索它的子目录
regExp：一个匹配文件的正则表达式
* */
const myImport = require.context('./packages', true, /index\.js$/)
console.log(myImport)


import FhvTest from './test'
import FhvAnchor from './anchor'
import FhvAnchorLink from './anchor-link'
import FhvElDemoBlock from './el-demo-block'
import FhvButton from './button'
// 所有的组件列表
const components = [
    FhvTest,
    FhvAnchor,
    FhvAnchorLink,
    FhvElDemoBlock,
    FhvButton
  //  FhvAnchorLink
]

// 定义install方法，接收vue作为参赛
const install = Vue => {
    // 判断是否安装，如果安装过就不继续往下执行
    if (install.installed) return
    install.installed = true
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 检查到vue才执行，因为组件是基于vue.js进行开发
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    ...components
}