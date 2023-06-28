// 有关写入通用css模块的路由区域
import FlexUse from '../components/publiccss/flexUse'
import GridUse from '../components/publiccss/gridUse'

export default [
    {
        id: 'css1',
        title: 'display flex布局解析',
        path: '/component/FlexUse',
        name: 'FlexUse',
        component: FlexUse,
        from: 's1'
    },
    {
        id: 'css2',
        title: 'display grid布局解析',
        path: '/component/gridUse',
        name: 'GridUse',
        component: GridUse,
        from: 's1'
    }
]
