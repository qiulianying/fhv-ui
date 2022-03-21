<template>
    <div class="content-box">
        <h2 class="demo-title">滑动图片组件验证</h2>
        <p class="demo-introduction">1、目前验证的图片会自动随机获取文档网图，传入图片暂不支持，后续有待开发</p>

        <!--基础用法DEMO-->
        <fhv-el-demo-block :height="480" :title="'基础用法'" id="button-simple">
            <template v-slot:demo>
                <fhv-imgverification :width="360" :height="200"
                                     ref="imgverification"
                                     @onReturnStateFunction="onReturnStateFunction">
                </fhv-imgverification>
                <div>
                    <span>状态：</span>
                    <span style="color: red">{{NowState}}</span>
                </div>
                <fhv-button type="dashed" @click="reloadThis">重置</fhv-button>
            </template>
            <template v-slot:code>
                <code class="html">{{fCode(code.html)}}</code>
            </template>
        </fhv-el-demo-block>
        <!-- API -->
        <div>
            <h3 class="demo-table-title">API</h3>
            <P class="demo-table-introduction">属性说明如下：</P>
            <fhv-table-simple :data="api" :type="'demo'"></fhv-table-simple>
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/03/16 19:25
     */
    export default {
        data() {
            return {
                NowState: '开始校验',
                code: {
                    html:`
                <fhv-imgverification :width="360" :height="200" ref="imgverification" @onReturnStateFunction="onReturnStateFunction">
                </fhv-imgverification>
                <div>
                    <span>状态：</span>
                    <span style="color: red">{{NowState}}</span>
                </div>
                <fhv-button type="dashed" @click="reloadThis">重置</fhv-button>
            reloadThis() {
                this.NowState = '开始校验'
                this.$refs.imgverification.toRefresh()
            },
            // 验证情况
            onReturnStateFunction(type) {
                console.log(type)
                if (type) {
                    this.NowState = '校验成功'
                } else {
                    this.NowState = '校验失败'
                }
            },

                    `
                },
                api: [
                    {
                        parameter: 'width',
                        description: '图片校验canvas宽度',
                        dataTypes: 'Number',
                        optional: '',
                        default: '310',
                        required: '否'
                    },
                    {
                        parameter: 'height',
                        description: '图片校验canvas高度',
                        dataTypes: 'Number',
                        optional: '',
                        default: '155',
                        required: '否'
                    },
                    {
                        parameter: 'toRefresh方法',
                        description: '调用组件该方法可刷新验证状态',
                        dataTypes: 'Function',
                        optional: '',
                        default: '',
                        required: '否'
                    },
                    {
                        parameter: 'onReturnStateFunction方法',
                        description: '回调方法，获取验证状态',
                        dataTypes: 'Boolean',
                        optional: '',
                        default: '',
                        required: '否'
                    },
                ]
            }
        },
        created() {
        },
        computed: {},
        components: {},
        methods: {
            reloadThis() {
                this.NowState = '开始校验'
                this.$refs.imgverification.toRefresh()
            },
            // 验证情况
            onReturnStateFunction(type) {
                console.log(type)
                if (type) {
                    this.NowState = '校验成功'
                } else {
                    this.NowState = '校验失败'
                }
            },
        }
    }
</script>

<style scoped>

</style>
