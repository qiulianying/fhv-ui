import { createApp } from 'vue'
import App from './App.vue'

// 引入公共public中的样式以及公用方法
import '../public/css/cover.scss';
import '../public/iconfont/iconfont.css';
import '../public/css/animate.min.css'
import { fCode, unique } from '../public/js/shn-vue-ui-base.js'

// 使用路由
import router from './router'
// 使用状态管理
import store from './store'
// 导入组件库
import FhvUI from '../packages/packages'

// 代码高亮，但是这里是vue2.0的方法，在3.0中并不适用
// import VueHighlightJS from 'vue-highlightjs'
// import 'highlight.js/styles/default.css' // or other highlight.js theme
// app.use(VueHighlightJS)

// vue3.0引入代码高亮组件
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'  // 引入其他主题

const app = createApp(App)
app.use(store)
app.use(router)
app.use(FhvUI)

// 使用高亮组件
app.use((app) => {
    // 注册全局自定义组件
    app.directive('highlightjs', {
        mounted(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                hljs.highlightElement(blocks[i]);
            }
        }
    })
})

// 测试vue3.0代替vue3.0 Vue.prototype.myFunction写法
app.config.globalProperties.fCode = fCode
app.config.globalProperties.unique = unique

// vue3.0页面加载
app.mount('#app')
