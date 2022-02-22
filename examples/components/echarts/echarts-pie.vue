<template>
    <div class="content-box">
        <h2 class="demo-title">饼图</h2>
        <p class="demo-introduction">相关饼图优化如下</p>
        <div style="width: 800px;height: 500px">
            <fhv-pie :idName="idName" ref="pieEchart" :option="option" :echartsData="echartsData"></fhv-pie>
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
     * @Date: 2022/02/21 15:08
     */
    export default {
        data() {
            return {
                echartsData: [],            // 环形图数据
                idName: 'pieechart',        // id名称
                option: {},                 //对应配置
                simple: {
                    code: {
                        html: `
<fhv-pie :idName="idName" ref="pieEchart" :option="option" :echartsData="echartsData"></fhv-pie>
            mounted() {
                // 执行该方法进行echarts启动
                this.$refs.pieEchart.initCharts()
            }
            <fhv-button type="primary" @click="changeNumber">生成随机数字的数组</fhv-button>
            // 生成随机数字的数组
            this.echartsData.forEach((item, index) => {
                this.echartsData[index].value = Math.floor(Math.random() * 100 + 1)
            })
          `
                    }
                },
                api: [
                    {
                        parameter: 'idName',
                        description: 'echarts的Id',
                        dataTypes: 'String',
                        optional: '',
                        default: 'pieechart',
                        required: '否'
                    },
                    {
                        parameter: 'echartsData',
                        description: '内容数据',
                        dataTypes: 'Array',
                        optional: '',
                        default: [              // 环形图数据
                            {
                                value: 80,
                                name: '社会组织'
                            }, {
                                value: 5,
                                name: '事业单位'
                            }, {
                                value: 15,
                                name: '公务员'
                            }
                        ],
                        required: '是'
                    },
                    {
                        parameter: 'option',
                        description: '配置项',
                        dataTypes: 'Object',
                        optional: '',
                        default: {
                            backgroundColor: '#fff',
                            tooltip: {
                                trigger: 'item'
                            },
                            legend:
                                {
                                    top: '90%',
                                    left: 'center'
                                },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['40%', '65%'],
                                    center: ['50%', '45%'],
                                    avoidLabelOverlap: false,
                                    startAngle: 0,
                                    label: {
                                        show: true,
                                        position: 'outside',
                                        formatter: '{d}%',
                                        fontSize: '14',
                                    },
                                    emphasis: {
                                        label: {
                                            show: true,
                                            fontSize: '14',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: true
                                    }
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
            this.option = {                   // 配置项
                backgroundColor: '#fff',
                tooltip: {
                    trigger: 'item'
                },
                legend:
                    {
                        top: '90%',
                        left: 'center'
                    },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '65%'],
                        center: ['50%', '45%'],
                        avoidLabelOverlap: false,
                        startAngle: 0,
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: '{d}%',
                            fontSize: '14',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '14',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: true
                        }
                    }
                ]
            }
            this.echartsData = [              // 环形图数据
                {
                    value: 80,
                    name: '社会组织'
                }, {
                    value: 5,
                    name: '事业单位'
                }, {
                    value: 15,
                    name: '公务员'
                }
            ]
            this.$refs.pieEchart.initCharts()
        },
        computed: {},
        components: {},
        methods: {
            changeNumber() {
                this.echartsData.forEach((item, index) => {
                    this.echartsData[index].value = Math.floor(Math.random() * 100 + 1)
                })
            }
        }
    }
</script>

<style scoped>

</style>
