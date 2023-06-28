<template>
    <div class="content-box">
        <p class="demo-introduction"></p>
        <div style="width: 1000px;height: 800px">
            <div id="chinaMap" style='width:100%;height:400px'> </div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import { MapChart } from 'echarts/charts';
    import changji from './alljson/changji.json';
    // 奇台县
    import qitaixian from './alljson/qitaixian.json';
    // 木垒哈萨克自治县
    import muleihasakezizhixian from './alljson/muleihasakezizhixian.json';
    // 昌吉市
    import changlishi from './alljson/changlishi.json';
    // 阜康市
    import fukangshi from './alljson/fukangshi.json';
    // 呼图壁县
    import hutubixian from './alljson/hutubixian.json';
    // 吉木萨尔县
    import jimusaerxian from './alljson/jimusaerxian.json';
    // 玛纳斯县
    import manasixian from './alljson/manasixian.json';

    export default {
        data() {
            return {
            };
        },
        created() {
        },
        mounted() {
            echarts.use([MapChart]);
            this.initChinaMap();
        },
        computed: {},
        components: {},
        methods: {
            // 中国地图
            initChinaMap() {
                let isName = true;
                echarts.registerMap('changji', changji); // 注册地图数据
                const mychart = echarts.init(document.getElementById('chinaMap'));
                const data = [
                    [87.30249, 44.01267, 2],
                    [87.98384, 44.152153, 2],
                    [86.888613, 44.189342, 159],
                    [86.217687, 44.305625, 10],
                    [89.591437, 44.021996, 2],
                    [89.181288, 43.997162, 84],
                ];
                const areaData = [];
                // eslint-disable-next-line array-callback-return
                data.map((item) => { // 扩大热力图效果
                    areaData.push(...new Array(6).fill(item));
                });
                console.log(data);
                const mapMax = Math.max(...data.map((item) => item[2]));
                const mapMin = Math.min(...data.map((item) => item[2]));
                console.log(mapMax, mapMin);
                const option = {
                    // 背景颜色
                    backgroundColor: '#404a59',
                    // 提示浮窗样式
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        alwaysShowContent: false,
                        backgroundColor: '#0C121C',
                        borderColor: 'rgba(0, 0, 0, 0.16);',
                        hideDelay: 100,
                        triggerOn: 'mousemove',
                        enterable: true,
                        textStyle: {
                            color: '#DADADA',
                            fontSize: '12',
                            width: 20,
                            height: 30,
                            overflow: 'break',
                        },
                        showDelay: 100,
                    },
                    // tooltip: {
                    //   formatter(params) {
                    //     return `地区：${params.name}</br>数值：${params.value[2]}`;
                    //   },
                    // },
                    visualMap: {
                        right: 10,
                        bottom: 10,
                        color: ['#ff4601', '#fffc00', '#87cffa'],
                        min: mapMin,
                        max: mapMax,
                        calculable: false,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    // 地图配置
                    geo: {
                        aspectScale: 0.75,
                        zoom: 1.1,
                        roam: false,
                        name: '昌吉市',
                        type: 'map',
                        map: 'changji', // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
                        label: {
                            // 通常状态下的样式
                            normal: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                            // 鼠标放上去的样式
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#1952A1',
                                shadowColor: '#0E223B',
                                borderWidth: 1, // 地界线
                                shadowOffsetX: 0,
                                shadowOffsetY: 10,
                            },
                            emphasis: {
                                areaColor: '#2ab8ff',
                                borderWidth: 0,
                                color: 'green',
                                label: {
                                    show: false,
                                },
                            },
                        },
                    },
                    series: [
                        {
                            type: 'heatmap', // 热力图
                            blurSize: 40,
                            coordinateSystem: 'geo',
                            legendHoverLink: true,
                            symbolSize: [0, 0],
                            // 这里渲染标志里的内容以及样式
                            label: {
                                show: isName,
                                formatter(value) {
                                    return `${value.data.name}\n(${value.data.value[2]})`;
                                },
                                color: '#000000',
                            },
                            // 标志的样式
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255,0,0,.7)',
                                    shadowBlur: 2,
                                    shadowColor: 'D8BC37',
                                },
                            },
                            // 数据格式，其中name,value是必要的，value的前两个值是数据点的经纬度，其他的数据格式可以自定义
                            // 至于如何展示，完全是靠上面的formatter来自己定义的
                            data: areaData,
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke',
                            },
                            hoverAnimation: true,
                            zlevel: 1,
                            zoom: 1.1,
                            roam: false,
                        },
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            effectType: 'ripple',
                            showEffectOn: 'render',
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255, 235, 59, .7)',
                                    shadowBlur: 10,
                                    shadowColor: '#333',
                                },
                            },
                            zlevel: 1,
                            data: areaData,
                        },

                    ],
                    graphic: [],
                };
                mychart.off();
                mychart.on('click', ({ name }) => {
                    console.log(1111, name);
                    // 如果option.graphic里已经有了城市名称，则不进行任何操作，防止频繁点击
                    const index = option.graphic.findIndex((i) => i.style.text === name);
                    console.log(option.graphic, index);
                    if (name === '返回' || option.graphic.length === 1) return;
                    isName = false;
                    const [mapName, mapJson] = this.getMap(name);
                    // 修改option的配置，可以继续自定义
                    option.geo.zoom = 0.8;
                    // 就像上面提到的，这里必须要和注册地图时的名字一致
                    option.geo.map = mapName;
                    option.series.zlevel = 4;
                    // 为了重新定位，这里使用了length
                    const idx = option.graphic.length + 1;
                    option.graphic.push({
                        type: 'text',
                        left: `${idx * 10}%`,
                        top: '10%',
                        style: {
                            text: '返回',
                            font: 'bolder 1.5rem "Microsoft YaHei", sans-serif',
                            fill: '#fff',
                        },
                        onclick: () => {
                            const val = option.graphic.findIndex((i) => i.style.text === name);
                            if (val === -1) {
                                option.graphic = [];
                            }
                            console.log(1, option.graphic, val);
                        },
                    });
                    console.log(22, option.graphic);
                    // 注册地图
                    echarts.registerMap(mapName, mapJson);
                    if (name === '') {
                        option.graphic = [];
                        isName = true;
                    }
                    // 重新渲染
                    mychart.setOption(option, true);
                });

                mychart.setOption(option);
                window.addEventListener('resize', () => {
                    mychart.resize();
                });
            },
            getMap(mapName) {
                const mapDict = {
                    奇台县: 'qitaixian',
                    木垒哈萨克自治县: 'muleihasakezizhixian',
                    昌吉市: 'changlishi',
                    阜康市: 'fukangshi',
                    呼图壁县: 'hutubixian',
                    吉木萨尔县: 'jimusaerxian',
                    玛纳斯县: 'manasixian',
                };
                const mapJson = [{
                    name: '奇台县',
                    json: qitaixian,
                },
                    {
                        name: '木垒哈萨克自治县',
                        json: muleihasakezizhixian,
                    },
                    {
                        name: '昌吉市',
                        json: changlishi,
                    },
                    {
                        name: '阜康市',
                        json: fukangshi,
                    },
                    {
                        name: '呼图壁县',
                        json: hutubixian,
                    },
                    {
                        name: '吉木萨尔县',
                        json: jimusaerxian,
                    },
                    {
                        name: '玛纳斯县',
                        json: manasixian,
                    },
                ];
                const chooseName = mapJson.filter((item) => item.name == mapName);
                const cityName = mapDict[mapName];
                if (cityName) {
                    return [cityName, chooseName[0].json];
                }
                return ['changji', changji];
            },
        },
    };
</script>

<style scoped>

</style>
