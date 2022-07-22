<template>
    <div class="content-box">
        <h2 class="demo-title">数据结构实战项目测试</h2>
        <div style="line-height: 30px">
            <p>这里主要通过一个demo，来检验数据结构相关知识点</p>
        </div>
        <!--canvasInfo：画布内容-->
        <canvas class="canvasshow" id="canvasshow"></canvas>
    </div>
</template>

<script>
    import {CanvasProject, stopLoop} from './js/basejs6'

    /**
     * @author: 冯耀华
     * @Date: 2022/03/15 11:35
     */
    export default {
        data() {
            return {
                width: 800,
                height: 350
            }
        },
        created() {
        },
        mounted() {
            let _this = this
            // 进行画布初始化
            this.CanvasProject = new CanvasProject({
                width: _this.width,
                height: _this.height,
            })
            this.CanvasProject.initcanvas()
        },
        unmounted() {
            // 关闭动画执行
            stopLoop()
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped lang="scss"></style>
