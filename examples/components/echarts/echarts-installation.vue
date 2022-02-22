<template>
    <div class="content-box">
        <h2 class="demo-title">echarts导读</h2>

        <!-- 致谢 -->
        <h3 class="demo-table-title">致谢</h3>
        <div class="demo-tip">
            <p>该项目使用Vue.js3.0版本开发</p>
            <p>
                <a href="https://cn.vuejs.org/" target="_blank">https://cn.vuejs.org/</a>
            </p>
        </div>

        <!--介绍-->
        <div class="demo-tip">
            <p>
                这里主要是使用到了echarts组件进行二次封装，编写了一套通过vue.js实现能够兼容不同分辨率的并对echarts
                部分功能进行内部优化的组件
            </p>
            <p>
                目前所有封装的echarts组件都可以在组件外部进行方便的样式控制以及根据echarts文档进行快捷的使用
            </p>
            <p>
                目前问题依然较多，还有待根据需求不断更新
            </p>
        </div>

        <!--内部优化解决-->
        <h3 class="demo-table-title">内部优化解决</h3>
        <ul>
            <li>1、组件内解决监听窗口变化echarts图形变化</li>
            <li>2、优化echarts组件数据加载问题，能够根据接口数据变化自动改变</li>
            <li>3、echarts以传入的属性为最高优先级，存在默认数据</li>
        </ul>

        <!--安装使用-->
        <h3 class="demo-table-title">安装使用</h3>
        <p class="demo-introduction" style="color: red">当前下载的echarts版本为5.3.0，务必使用5.0以上版本</p>
        <p class="demo-introduction">在前面的导读中也有介绍，该项目使用的vue3.0技术，虽然组件能够适配vue3.0以及vue2.0，但是推荐还是尽量使用3.0更高版本</p>
        <p class="demo-introduction">npm install echarts --save</p>
    </div>
</template>

<script>
    export default {
        name: 'echarts-installation',
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style lang="scss">
    .github-img {
        cursor: pointer;
        position: relative;
        top: 5px;
        margin: 0 8px 0 5px;
    }
</style>

