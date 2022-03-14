<template>
    <div class="content-box">
        <h2 class="demo-title">滑动验证组件</h2>
        <p class="demo-introduction">改滑动验证组件属于无图片类型</p>


        <!--基础用法DEMO-->
        <fhv-el-demo-block :height="480" :title="'基础用法'" id="button-simple">
            <template v-slot:demo>
                <div style="margin-top: 30px;width: 500px">
                    <fhv-verification
                            :confirmWords="'背景文字'"
                            :confirmSuccessWords="'恭喜验证通过'"
                            @returnVerification="returnVerification"
                            ref="verification">
                    </fhv-verification>
                    <p style="margin: 10px 0">{{typeInfo}}</p>
                    <fhv-button type="dashed" @click="reload">重置</fhv-button>
                </div>
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
     * @Date: 2022/03/10 15:13
     */
    export default {
        data() {
            return {
                typeInfo: '滑动验证',
                simple: {
                    code: {
                        html: `
                    <fhv-verification
                            :confirmWords="'背景文字'"
                            :confirmSuccessWords="'恭喜验证通过'"
                            @returnVerification="returnVerification"
                            ref="verification">
                    </fhv-verification>
                    <p style="margin: 10px 0">{{typeInfo}}</p>
                    <fhv-button type="dashed" @click="reload">重置</fhv-button>
          // 返回结果
            returnVerification(type) {
                if (type) {
                    this.typeInfo = '验证成功'
                } else {
                    this.typeInfo = '滑动验证'
                }
            },
          // 刷新
            reload() {
                this.$refs.verification.verificationReload()
                this.typeInfo = '滑动验证'
            }
          `
                    }
                },
                api: [
                    {
                        parameter: 'confirmWords',
                        description: '验证栏中间展示的背景文字',
                        dataTypes: 'String',
                        optional: '',
                        default: '',
                        required: '否'
                    },
                    {
                        parameter: 'confirmSuccessWords',
                        description: '验证成功后验证栏中间展示的背景文字',
                        dataTypes: 'String',
                        optional: '',
                        default: '',
                        required: '否'
                    },
                    {
                        parameter: 'verificationReload方法',
                        description: '调用组件该方法可刷新验证状态',
                        dataTypes: 'Function',
                        optional: '',
                        default: '',
                        required: '否'
                    },
                    {
                        parameter: 'returnVerification方法',
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
            returnVerification(type) {
                if (type) {
                    this.typeInfo = '验证成功'
                } else {
                    this.typeInfo = '滑动验证'
                }
            },
            reload() {
                this.$refs.verification.verificationReload()
                this.typeInfo = '滑动验证'
            }
        }
    }
</script>

<style scoped>

</style>
