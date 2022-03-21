<template>
    <div class="slidingVerificationCode">
        <div class="captcha"></div>
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
                jigsawObj: ''
            }
        },
        props: {
            width: {
                type: Number,
                default: 310
            },
            height: {
                type: Number,
                default: 155
            }
        },
        mounted() {
            let _this = this
            this.jigsawObj = new Jigsaw({
                el: document.querySelector('.slidingVerificationCode>.captcha'),
                width: _this.width,
                height: _this.height,
                // 验证成功或者失败的状态
                onReturnState: _this.onReturnState,
                // 刷新
                onRefresh: _this.cleanMsg
            })
            // 执行初始化处理
            this.jigsawObj.init()
        },
        methods: {
            // 刷新方法回调
            cleanMsg() {
                console.log('刷新成功回调')
            },
            // 返回验证状态
            onReturnState(type) {
                this.$emit('onReturnStateFunction', type)
            },
            // 执行验证刷新
            toRefresh() {
                this.jigsawObj.refresh()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./jigsaw.css";
</style>
