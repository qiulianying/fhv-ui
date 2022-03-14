const $app = () => {
    const fn = {}

    //调用支付模块
    fn.requestPayment = (payType, data = {}, { success, fail }) => {
        /*如果是h5的情况下*/
        // #ifdef H5
        if (payType === 1) {
            //微信公众号h5页面支付
            // 在微信浏览器里面打开H5网页中执行JS调起支付。接口输入输出数据格式为JSON。
            // 注意：WeixinJSBridge内置对象在其他浏览器中无效。
            function onBridgeReady () {
                // eslint-disable-next-line no-undef
                WeixinJSBridge.invoke('getBrandWCPayRequest', {
                    appId: data.appid || data.appId,
                    timeStamp: data.timeStamp,
                    nonceStr: data.nonceStr,
                    package: data.package,
                    signType: data.signType || 'MD5',
                    paySign: data.paySign
                }, res => {
                    if (res.err_msg === 'get_brand_wcpay_request:ok') {
                        if (success) {
                            success(res)
                        }
                    } else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
                        fail('支付取消')
                    } else if (res.err_msg === 'get_brand_wcpay_request:fail') {
                        fail('支付失败')
                    }
                })
            }
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
                }
            } else {
                onBridgeReady()
            }
            return
        } else if (payType === 2) {
            // 支付宝 H5 支付 AlipayJSBridge是支付宝在window.onload之后直接存在的
            if (window.AlipayJSBridge) { // 支付宝 H5 支付
                return window.AlipayJSBridge.call('tradePay', {
                    tradeNO: data.tradeNO
                }, res => {
                    const { resultCode } = res
                    if (+resultCode === 9000) {
                        if (success) {
                            success(res)
                        }
                    } else {
                        if (fail) {
                            fail('支付已取消或失败')
                        }
                    }
                })
            }
        }
        // #endif

    }
    return fn
}
export default $app()
