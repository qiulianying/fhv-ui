// 还有 createWebHashHistory 和 createMemoryHistory  vue-router4.0使用的迁移方式
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "./view/Home";
//组件
import component from './routers/component'
import baseComponent from "./routers/baseComponent";

// 使用路由
let routesArray = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/component/installation',
        children: [
            // 基础描述
            ...component,
            // 基础组件
            ...baseComponent
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),        //vue-router4.0版本的数据切换
    routes: routesArray
})

export default router
