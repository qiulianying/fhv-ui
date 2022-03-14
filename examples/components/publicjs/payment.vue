<template>
    <div class="content-box">
        <h2 class="demo-title">支付测试公共js模块</h2>
        <p class="demo-introduction">相关注意事项如下</p>
        <p class="demo-introduction">1、js代码端可通用于uni-app</p>
        <p class="demo-introduction">2、只限于h5公众号支付唤起扫码进入软件测试，包括微信，支付宝，云闪付</p>

        <div style="margin-top: 20px">
            <div>
                <p>写入对应的参数</p>
                <fhv-button type="success">点击复制链接</fhv-button>
                <fhv-button type="success">点击生成二维码</fhv-button>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/03/14 15:34
     */
    export default {
        data() {
            return {
                /**
                 * PT_WEIXIN   = 1 //微信
                 * PT_ALIPAY   = 2 //支付宝
                 * PT_UNIONPAY = 6 //云闪付
                 */
                PAY_TYPE: {
                    WECHAT: 1,
                    ALIPAY: 2,
                    UNIONPAY: 6
                },
            }
        },
        created() {
        },
        computed: {},
        components: {},
        methods: {

        }
    }
</script>

<style scoped>

</style>
