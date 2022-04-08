// 有关echarts相关组件采用自动化引入方式
import echartsInstallation from '../components/echarts/echarts-installation'
import echartsLine from '../components/echarts/echarts-line'
import echartsPie from '../components/echarts/echarts-pie'

export default [
    {
        id: 111,
        title: '导读',
        path: '/component/echartsInstallation',
        name: 'echartsInstallation',
        component: echartsInstallation,
        from: 's0'
    },
    {
        id: 112,
        title: '折线图',
        path: '/component/line',
        name: 'line',
        component: echartsLine,
        from: 's0'
    },
    {
        id: 113,
        title: '饼图',
        path: '/component/pie',
        name: 'pie',
        component: echartsPie,
        from: 's0'
    }
]
