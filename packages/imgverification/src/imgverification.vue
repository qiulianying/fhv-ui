<template>
    <div>
        <div class="slidingVerificationCode">
            <div class="captcha"></div>
            <div class="msg"></div>
        </div>
        <div id="hong">here</div>
    </div>
</template>

<script>
    import Jigsaw from './jigsaw'
    /**
     * @author: 冯耀华
     * @Date: 2022/03/17 17:58
     */
    export default {
        name: 'fhv-imgverification',
        data() {
            return {

            }
        },
        mounted() {
            let _this = this
            let jigsawObj = new Jigsaw({
                el: document.querySelector('.slidingVerificationCode>.captcha'),
                onSuccess: _this.successFunction,
                onFail: _this.failFunction,
                onRefresh: _this.cleanMsg
            })
            // 执行初始化处理
            jigsawObj.init()
        },
        methods: {
            // 刷新方法
            cleanMsg() {

            },
            // 成功
            successFunction() {

            },
            // 失败
            failFunction() {

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./jigsaw.css";
    .slidingVerificationCode {
        width: 310px;
        margin: 100px auto;
    }

    .slidingVerificationCode>.msg {
        width: 100%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
    }
</style>
