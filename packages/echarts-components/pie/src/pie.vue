<template>
    <!-- 饼图 -->
    <div :id="idName" style="width: 100%; height: 100%;"></div>
</template>

<script>
    import echartsMixin from "../../../../layout/mixin/echarts";
    /**
     * @author: 冯耀华
     * @Date: 2022/02/21 15:26
     */

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
        mixins: [echartsMixin],
        data() {
            return {}
        },
        components: {},
        methods: {
            // 针对数据进行处理并返回结果即可，会在继承的公用方法中自动调用
            getOption() {
                let _this = this
                _this.option.series[0].data = _this.echartsData
                return _this.option
            }
        }
    }
</script>

<style scoped>

</style>
