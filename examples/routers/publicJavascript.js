// 有关写入通用js模块的路由区域
import Payment from '../components/publicjs/payment'
import PublicUse from '../components/publicjs/PublicUse'
import EsPublicuse from '../components/publicjs/EsPublicUse'
import ElementTest from '../components/publicjs/ElementTest'

export default [
    {
        id: 'js1',
        title: '支付通用调试',
        path: '/component/publicjs',
        name: 'Payment',
        component: Payment,
        from: 's2'
    },
    {
        id: 'js2',
        title: '通用js模块',
        path: '/component/publicuse',
        name: 'PublicUse',
        component: PublicUse,
        from: 's2'
    },
    {
        id: 'js3',
        title: '通用es6模块(主要数据处理)',
        path: '/component/EsPublicuse',
        name: 'EsPublicuse',
        component: EsPublicuse,
        from: 's2'
    },
    {
        id: 'js4',
        title: '测试element常用',
        path: '/component/ElementTest',
        name: 'ElementTest',
        component: ElementTest,
        from: 's2'
    },
]
