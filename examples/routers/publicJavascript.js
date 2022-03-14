// 有关写入通用js模块的路由区域
import Payment from '../components/publicjs/payment'
import paymentTestPhone from '../components/publicjs/paymentTestPhone'

export default [
    {
        id: 'js1',
        title: '公众号h5支付通用',
        path: '/component/publicjs',
        name: 'Payment',
        component: Payment
    },
    {
        id: 'js2',
        title: '公众号手机支付测试页面',
        path: '/component/paymentTestPhone',
        name: 'paymentTestPhone',
        component: paymentTestPhone
    },
]
