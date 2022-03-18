<template>
    <div style="margin: 130px auto 0;text-align: center">
        <fhv-button type="success" @click="toPayTest">点击支付</fhv-button>
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
            toPayTest() {
                let orderObj = {
                    appId: "wxa8f05e65a4b9f7d3",
                    timeStamp: "1647309060",
                    nonceStr: "8Knw0Z0GRze5AaQQBEbT0agxLVhD7y",
                    package: "prepay_id=wx15095059979593c05ac4301d43447f0000",
                    signType: "MD5",
                    paySign: "A21E6D71E62456D4CEAAD0776F222742"
                }
                this.$plugin.app.requestPayment(1, orderObj, {
                    success: res => {
                        console.log(res)
                        //支付成功
                    },
                    fail: err => {
                        console.log(err)
                        //支付失败
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
