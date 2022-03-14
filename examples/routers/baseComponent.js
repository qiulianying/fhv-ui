import fhvTest from '../components/fhv-test'
import fhvButtonDemo from '../components/fhv-button-demo'
import fhvVerification from '../components/fhv-verification'

export default [
    {
        id: 11,
        group: '通用',
        title: '测试组件',
        path: '/component/test',
        name: 'fhvTest',
        component: fhvTest
    },
    {
        id: 12,
        title: 'Button 按钮',
        path: '/component/button',
        name: 'fhvButtonDemo',
        component: fhvButtonDemo
    },
    {
        id: 13,
        title: '滑动验证组件',
        path: '/component/verification',
        name: 'fhvVerification',
        component: fhvVerification
    }
]
