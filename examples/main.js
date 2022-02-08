import { createApp } from 'vue'
import App from './App.vue'

import '../public/css/cover.scss';
import '../public/iconfont/iconfont.css';
import '../public/css/animate.min.css'

// 使用路由
import router from './router'
// 使用状态管理
import store from './store'
// 导入组件库
import FhvUI from '../packages/index'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(FhvUI)
app.use(VueHighlightJS)

// vue3.0页面加载
app.mount('#app')
