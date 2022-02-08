<!--test.vue-->
<template>
    <div class="fhv-test" @click="handleClick">{{ num }}</div>
</template>

<script>
    /*
    * 具有唯一标识组件的作用，将来我们可是要通过这个 name 来找到和判定这是什么组件，所以你写的所有组件应该是不重名的；
    * 其次这个 name 就是我们最终的标签名，比如这里我们的 name 是 XrTest，到时候我们写的标签就长这样
    * <fhv-test></fhv-test>，就像 Element 一样，name 是 ElButton，用的时候就是
    * <el-button></el-button>
    * */
    export default {
        name: 'FhvTest', // 这个名字很重要，它就是未来的标签名<fhv-test></fhv-test>，坑了我一下
        data() {
            return {
                num: 0
            }
        },
        methods: {
            handleClick() {
                this.num++
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fhv-test {
        width: 100px;
        height: 100px;
        line-height: 100px;
        border-radius: 50%;
        font-size: 30px;
        text-align: center;
        background: #24292e;
        color: white;
    }
</style>
