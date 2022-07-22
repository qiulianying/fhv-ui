<template>
    <div class="content-box">
        <h2 class="demo-title">部分通用项目js常用方法会中</h2>
        <p class="demo-introduction">相关注意事项如下</p>

        <fhv-el-demo-block :height="2200" :title="'基础用法'" id="button-simple">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{simple.publicJs}}</code>
            </template>
        </fhv-el-demo-block>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/03/15 11:35
     */
    export default {
        data() {
            return {
                simple: {
                    publicJs: '具体内容'
                }
            }
        },
        created() {
            // 进行文件读取
            this.$axios.get('https://qiulianying.github.io/fhv-ui/js/util.js').then(res => {
                if (res.data) {
                    this.simple.publicJs = res.data
                }
            })
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>

</style>
