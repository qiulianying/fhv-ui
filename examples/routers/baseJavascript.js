// 有关写入通用js模块的路由区域
let titleArray = [
    'let,var,const变量定义',
    'js各类循环体系',
    'js跳出循环概念',
    '数据类型深究',
    '数据类型继承概念深究',
    '数据结构实战项目测试',
    'js中的排序神器sort',
    'js去重神器set以及对应数据结构',
    'this的深究以及call、apply、bind',
    'js异步深究',
    'js闭包深究',
    'webpack使用技巧',
    'vue.js原理以及js原型链深究'
]

const baseRouterArray = require.context('../components/basejs', false, /.vue$/)
const viewRoutes = baseRouterArray.keys().map((item, index) => {
    return {
        id: 'basejs' + (index + 1),
        title: titleArray[index],
        path: '/component/basejs/basejs' + (index + 1),
        name: 'Basejs' + (index + 1),
        component: baseRouterArray(item).default,
        from: 's3'
    }
})
export default viewRoutes
