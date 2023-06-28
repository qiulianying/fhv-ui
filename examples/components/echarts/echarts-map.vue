<template>
    <div class="content-box">
        <h2 class="demo-title">中国地图</h2>
        <p class="demo-introduction"></p>
        <div style="width: 800px;height: 800px">
            <div id="chinaMap" style='width:100%;height:622px'> </div>
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/02/21 15:08
     */
    import china from './china.json'
    import * as echarts from 'echarts';
    import { MapChart } from 'echarts/charts'
    export default {
        data() {
            return{
                myChart:null,
                dataList: [
                    { name: "南海诸岛",  value: 100,  eventTotal:100,  specialImportant:10,  import:10,  compare:10, common:40,  specail:20 },
                    { name: "北京", value: 540 },
                    { name: "天津", value: 130 },
                    { name: "上海", value: 400},
                    { name: "重庆",  value: 750},
                    { name: "河北", value: 130},
                    { name: "河南", value: 830},
                    { name: "云南", value: 110 },
                    { name: "辽宁",  value: 19 },
                    { name: "黑龙江",  value: 150},
                    { name: "湖南", value: 690 },
                    { name: "安徽", value: 60 },
                    { name: "山东", value: 39 },
                    { name: "新疆", value: 452 },
                    { name: "江苏", value: 31 },
                    { name: "浙江", value: 104 },
                    { name: "江西", value: 36 },
                    { name: "湖北", value: 52},
                    { name: "广西", value: 33 },
                    { name: "甘肃", value: 73 },
                    { name: "山西", value: 54 },
                    { name: "内蒙古", value: 778},
                    { name: "陕西", value: 22},
                    { name: "吉林",value: 44 },
                    { name: "福建",value: 18},
                    { name: "贵州", value: 54},
                    { name: "广东", value: 98},
                    { name: "青海",value: 13},
                    { name: "西藏", value: 0},
                    { name: "四川", value: 44},
                    { name: "宁夏", value: 42},
                    { name: "海南", value: 22 },
                    { name: "台湾", value: 23},
                    { name: "香港",value: 25},
                    { name: "澳门",value: 555}
                ]
            }
        },
        created() {
        },
        mounted() {
            echarts.use([MapChart])
            this.initChinaMap();
        },
        computed: {},
        components: {},
        methods: {
            // 中国地图
            initChinaMap() {
                echarts.registerMap('china', china); //注册地图数据
                const mychart = echarts.init(document.getElementById("chinaMap"));
                const option = {
                    //浮动提示框
                    title: {text: '全国各地信息统计情况', left: "4%", top: "3%"},
                    tooltip: {
                        backgroundColor: "rgba(50,50,50,0.7)",
                        textStyle: {color: "#fff"},
                        formatter(params) {
                            // params.data 就是series配置项中的data数据遍历
                            let rukuNum = 0, chukuNum = 0;
                            if (params.data) {
                                rukuNum = params.data.rukuNum;
                                chukuNum = params.data.chukuNum;
                            }
                            let html = `<div>入库数量：${rukuNum}</div>
                        <div>出库数量：${chukuNum}</div>`
                            return html;
                        }
                    },
                    visualMap: {
                        type: "piecewise",
                        min: 0,
                        max: 5000,
                        itemWidth: 40,
                        bottom: 60, left: 20,
                        pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                            {gt: 900, lt: 1000, label: '900-1000', color: '#6ad86e'}, // (900, 1000]
                            {gt: 500, lt: 900, label: '500-900', color: '#9adcfa'}, // (500, 900]
                            {gt: 310, lt: 500, label: '310-500', color: '#ffeb3b'}, // (310, 500]
                            {gt: 100, lt: 300, label: '100-300', color: '#ff9800'}, // (200, 300]
                            {gt: 0, lt: 100, label: '>100', color: 'orangered'} // (10, 200]
                        ]
                    },
                    geo: {
                        map: "china",
                        zoom: 1.2,
                        label: {show: true},
                        itemStyle: {
                            borderColor: 'rgba(0, 0, 0, 0.2)',
                            // areaColor: '#8DBFEB',  //地图的背景色
                            emphasis: { // 高亮状态下的多边形和标签样式
                                shadowBlur: 20,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: "", type: "map", geoIndex: 0, label: {show: true}, data: [
                                {"name": "北京", "value": 42, "rukuNum": 42, "chukuNum": 8},
                                {"name": "上海", "value": 688, "rukuNum": 688, "chukuNum": 299},
                                {"name": "黑龙江", "value": 7, "rukuNum": 7, "chukuNum": 0}
                            ]
                        }
                    ]

                }
                mychart.setOption(option);
                window.addEventListener("resize", function () {
                    mychart.resize();
                });
            },
        }
    }
</script>

<style scoped>

</style>
