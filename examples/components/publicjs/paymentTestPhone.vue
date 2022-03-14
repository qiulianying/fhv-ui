<template>
    <div style="margin: 30px auto 0">
        <fhv-button type="success">点击支付</fhv-button>
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
