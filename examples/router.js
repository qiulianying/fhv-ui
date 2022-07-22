// 还有 createWebHashHistory 和 createMemoryHistory  vue-router4.0使用的迁移方式
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "./view/Home";

// 自动化引入路由以及部分无需引入的区域
let ignoreArray = ['otherRouter.js']
const myRouterArray = require.context('./routers', false, /.js$/)
let componentsRouter = new Array()
myRouterArray.keys().map(item => {
    if (ignoreArray.indexOf(item.split('./')[1]) === -1) {
        const value = myRouterArray(item)
        componentsRouter = componentsRouter.concat(value.default)
    }
})
// 使用路由
let routesArray = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/component/installation',
        children: componentsRouter
    }
]
const router = createRouter({
    history: createWebHashHistory(),        //vue-router4.0版本的数据切换
    routes: routesArray
})

export default router
