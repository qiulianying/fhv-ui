import fhvTest from '../components/fhv-test'
import fhvButtonDemo from '../components/fhv-button-demo'
import fhvVerification from '../components/fhv-verification'
import fhvBackTop from '../components/fhv-backtop-demo'
import fhvImageVerification from '../components/fhv-imageverification'
import fhvFooterToolbar from '../components/fhv-footertoolbar'

export default [
    {
        id: 11,
        group: '通用',
        title: '测试组件',
        path: '/component/test',
        name: 'fhvTest',
        component: fhvTest,
        from: 's0'
    },
    {
        id: 12,
        title: 'Button 按钮',
        path: '/component/button',
        name: 'fhvButtonDemo',
        component: fhvButtonDemo,
        from: 's0'
    },
    {
        id: 13,
        title: 'verification 滑动验证组件',
        path: '/component/verification',
        name: 'fhvVerification',
        component: fhvVerification,
        from: 's0'
    },
    {
        id: 14,
        title: 'ImageVerification 图片滑动验证',
        path: '/component/ImageVerification',
        name: 'fhvImageVerification',
        component: fhvImageVerification,
        from: 's0'
    },
    {
        id: 15,
        title: 'BackTop 回到顶部',
        path: '/component/fhvBackTop',
        name: 'fhvBackTop',
        component: fhvBackTop,
        from: 's0'
    },
    {
        id: 16,
        title: 'footertoolbar 底部工具栏',
        path: '/component/fhv-footertoolbar',
        name: 'fhvFooterToolbar',
        component: fhvFooterToolbar,
        from: 's0'
    },
]
