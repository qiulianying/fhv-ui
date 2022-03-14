// 这个router专门用于存放需要使用但是不进行直接展示的路由
import paymentTestPhone from '../components/publicjs/paymentTestPhone'
export default [
    {
        title: '公众号手机支付测试页面',
        path: '/component/paymentTestPhone',
        name: 'paymentTestPhone',
        component: paymentTestPhone
    }
]
