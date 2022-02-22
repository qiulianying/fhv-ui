<template>
    <!-- 饼图 -->
    <div :id="idName" style="width: 100%; height: 100%;"></div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/02/21 15:26
     */
    import * as echarts from 'echarts';

    export default {
        name: 'fhv-pie',
        props: {
            idName: {   // 组件id名称
                type: String,
                default: 'pieechart'
            },
            echartsData: {// 图中数据
                type: Array,
                default: () => [
                    {
                        value: 95,
                        name: '社会组织'
                    }, {
                        value: 5,
                        name: '事业单位'
                    },
                ]
            },
            option: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {}
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
        computed: {},
        components: {},
        methods: {
            initCharts() {
                let _this = this
                this.$nextTick(() => {
                    let myPieChart = echarts.init(document.getElementById(_this.idName))
                    _this.option.series[0].data = _this.echartsData
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

<style scoped>

</style>
