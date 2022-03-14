// 主要为echarts组件混入与基础，为echarts组件添加自适应功能以及数据自动变化
import * as echarts from 'echarts';

export default {
    computed: {
        myPieChart() {
            return echarts.init(document.getElementById(`${this.idName}`))
        }
    },
    mounted() {
        this.myPieChart.showLoading()
    },
    watch: {
        option: {
            handler: function () {
                // 监听到数据变化时进行修改
                this.initCharts()
            },
            deep: true
        }
    },
    methods: {
        initCharts() {
            // 通过先获取数据再加载图形，可以解决刷新图形缩小的问题
            let _this = this
            this.$nextTick(function () {
                _this.myPieChart.setOption(_this.getOption())
                setTimeout(function () {
                    _this.myPieChart.resize()
                }, 500)
                // 监听窗口变化
                window.addEventListener('resize', function () {
                    setTimeout(function () {
                        _this.myPieChart.resize()
                    }, 500)
                })
                _this.myPieChart.hideLoading()
            })
        },
    }
}
