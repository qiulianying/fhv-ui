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
    import echartsMixin from '../../../../layout/mixin/echarts'

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
        mixins: [echartsMixin],
        methods: {
            // 针对数据进行处理并返回结果即可，会在继承的公用方法中自动调用
            getOption() {
                let _this = this
                _this.option.xAxis ? _this.option.xAxis.data = _this.xData : _this.option.xAxis = {data: _this.xData}
                _this.option.series ? _this.option.series[0].data = _this.yData : _this.option.series = [_this.yData]
                return _this.option
            }
        }
    }
</script>
