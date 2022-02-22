<template>
    <!-- 折线图 -->
    <div :id="idName" style="width: 100%; height: 100%;"></div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/02/18 9:49
     * echarts折线图
     */
    import * as echarts from 'echarts';

    export default {
        name: 'fhv-line',
        components: {},
        props: {
            idName: {   // 组件id名称
                type: String,
                default: 'linechart'
            },
            xData: {// x轴数值
                type: Array,
                default: () => ["0", "4", "8", "12", "16", "20"]
            },
            yData: {// y轴数值
                type: Array,
                default: () => ["40", "60", "22", "85", "50", "40"]
            },
            bgColor: {
                type: String,
                default: '#64C67E'
            },
            option: { // 折线图配置
                type: Object,
                default: () => {
                    return {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                data: [150, 230, 224, 218, 135, 147, 260],
                                type: 'line'
                            }
                        ]
                    }
                }
            }
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
                    let myPieChart = echarts.init(document.getElementById(`${_this.idName}`))
                    _this.option.xAxis ? _this.option.xAxis.data = _this.xData : _this.option.xAxis = {data: _this.xData}
                    _this.option.series ? _this.option.series[0].data = _this.yData : _this.option.series = [_this.yData]
                    myPieChart.setOption(_this.option)
                    setTimeout(function () {
                        myPieChart.resize()
                    }, 500)
                    // 监听窗口变化
                    window.addEventListener('resize', function () {
                        setTimeout(function () {
                            myPieChart.resize()
                        }, 500)
                    })
                })
            }
        }
    }
</script>
