<template>
    <div class="content-box">
        <h2 class="demo-title">折线图</h2>
        <p class="demo-introduction">相关折线图优化如下</p>
        <p class="demo-introduction">1、自动根据数据变化监听内容</p>
        <p class="demo-introduction">2、优化数据变化样式以及其他问题</p>
        <p class="demo-introduction" style="color: red">
            3、该组件可以通过修改option配置，以及x,y轴内容，使得能够同样应用在所有存在x,y轴的echarts组件，例如柱状图，散点图，折线图等
        </p>
        <!--折线图写入规范-->
        <div style="width: 800px;height: 500px">
            <fhv-line ref="bingChart" :idName="idName" :xData="xData" :yData="yData" :option="option"></fhv-line>
        </div>
        <!--基础用法DEMO-->
        <fhv-el-demo-block :height="315" :title="'基础用法'" id="button-simple">
            <template v-slot:demo>
                <fhv-button type="primary" @click="changeNumber">生成随机数字的数组</fhv-button>
            </template>
            <template v-slot:code>
                <code class="html">{{fCode(simple.code.html)}}</code>
            </template>
        </fhv-el-demo-block>

        <!-- API -->
        <div id="api">
            <h3 class="demo-table-title">API</h3>
            <P class="demo-table-introduction">属性说明如下：</P>
            <fhv-table-simple :data="api" :type="'demo'"></fhv-table-simple>
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/02/18 9:58
     */
    export default {
        data() {
            return {
                bgColor: '#64C67E',
                idName: 'linechart',
                xData: [],      // x数轴内容
                yData: [],   // y轴数据内容
                option: {},
                simple: {
                    code: {
                        html: `
<fhv-line ref="bingChart" :idName="idName" :xData="xData" :yData="yData" :option="option"></fhv-line>
            mounted() {
                // 执行该方法进行echarts启动
                this.$refs.bingChart.initCharts()
            }
            <fhv-button type="primary" @click="changeNumber">生成随机数字的数组</fhv-button>
            // 生成随机数字的数组
            changeNumber() {
                this.yData.forEach((item, index) => {
                    this.yData[index] = (Math.floor(Math.random() * 100 + 1)).toString()
                })
            }
          `
                    }
                },
                api: [
                    {
                        parameter: 'idName',
                        description: 'echarts的Id',
                        dataTypes: 'String',
                        optional: '',
                        default: 'linechart',
                        required: '否'
                    },
                    {
                        parameter: 'bgColor',
                        description: '背景样色',
                        dataTypes: 'String',
                        optional: '',
                        default: '#64C67E',
                        required: '否'
                    },
                    {
                        parameter: 'xData',
                        description: 'x数轴内容',
                        dataTypes: 'Array',
                        optional: '',
                        default: ["0", "4", "8", "12", "16", "20"],
                        required: '否'
                    },
                    {
                        parameter: 'yData',
                        description: 'y轴数据内容',
                        dataTypes: 'Array',
                        optional: '',
                        default: ["40", "60", "22", "85", "50", "70"],
                        required: '是'
                    },
                    {
                        parameter: 'option',
                        description: '配置项',
                        dataTypes: 'Object',
                        optional: '',
                        default: {
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
                        },
                        required: '是'
                    }
                ]
            }
        },
        created() {
        },
        mounted() {
            this.xData = ["0", "4", "8", "12", "16", "20"]
            this.yData = ["40", "60", "22", "85", "50", "70"]
            this.option = {
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    top: '18%',
                    left: '15%',
                    right: '5%',
                    bottom: '25%',
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: true,
                    axisLine: { //坐标轴轴线相关设置。数学上的x轴
                        show: true,
                        lineStyle: {
                            color: 'color:"#999"'
                        },
                    },
                    axisLabel: { //坐标轴刻度标签的相关设置
                        textStyle: {
                            color: '#999',
                            margin: 15,
                        },
                        formatter: function (data) {
                            return data
                        }
                    },
                    axisTick: {
                        show: false,
                    }
                }],
                yAxis: [{
                    min: -50,
                    max: 200,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#999'
                        },
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#999"
                        }

                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#999',

                        },
                        formatter: function (value) {
                            if (value === 0) {
                                return value
                            }
                            return value
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                }],
                series: [
                    {
                        name: '注册总量',
                        type: 'line',
                        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                        showAllSymbol: true,
                        symbolSize: 8,
                        lineStyle: {
                            normal: {
                                color: this.bgColor, // 线条颜色
                            },
                            borderColor: 'rgba(0,0,0,.4)',
                        },
                        itemStyle: {
                            color: this.bgColor,
                            borderColor: this.bgColor,
                            borderWidth: 2

                        },
                        label: {
                            normal: {
                                show: true,
                                position: "top",
                                formatter: [
                                    ' {a|{c}}',
                                ].join(','),
                                rich: {
                                    a: {
                                        color: this.bgColor,
                                        align: 'center',
                                    },
                                }
                            }
                        },
                        tooltip: {
                            show: true
                        }
                    }
                ]
            }
            this.$refs.bingChart.initCharts()
        },
        computed: {},
        components: {},
        methods: {
            // 生成随机数字的数组
            changeNumber() {
                this.yData.forEach((item, index) => {
                    this.yData[index] = (Math.floor(Math.random() * 100 + 1)).toString()
                })
            }
        }
    }
</script>

<style scoped>

</style>
