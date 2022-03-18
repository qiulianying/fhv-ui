// 有关写入通用js模块的路由区域
import Payment from '../components/publicjs/payment'
import PublicUse from '../components/publicjs/PublicUse'

export default [
    {
        id: 'js1',
        title: '支付通用调试',
        path: '/component/publicjs',
        name: 'Payment',
        component: Payment
    },
    {
        id: 'js2',
        title: '通用js模块',
        path: '/component/publicuse',
        name: 'PublicUse',
        component: PublicUse
    },
]
