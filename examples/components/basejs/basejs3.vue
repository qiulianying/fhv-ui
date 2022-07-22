<template>
    <div class="content-box">
        <h2 class="demo-title">js跳出循环概念</h2>
        <pre class="mypre">
一般来说，js的循环跳出主要由以下三种
<span class="myTitle">return：语句会终止函数的执行并返回函数的值，会终止当前这一块函数的后续所有操作</span>
<span class="myTitle">break：跳出代码块, 所以 break 可以使用于循环和 switch 等，代码块：{}</span>
<span class="myTitle">continue：进行下一个迭代，所以continue只能用于循环的代码块</span>
        </pre>
        <fhv-el-demo-block :height="300" :showInfo="true" :hideButton="false" id="button-simple">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    // return
                    function testReturn() {
                    for (let i = 0; i < 5; i++) {
                    if (i === 3) return
                    // 0,1,2
                    console.log("a this number is " + i)
                    }
                    }
                    // break
                    function testBreak() {
                    for (let i = 0; i < 5; i++) {
                    if (i === 3) break  // 0,1,2
                    console.log("b this number is " + i)
                    }
                    }
                    // continue
                    function testContinue() {
                    for (let i = 0; i < 5; i++) {
                    if (i === 3) continue // 进行下一个迭代了
                    // 0,1,2,4,5
                    console.log("c this number is " + i)
                    }
                    }
                    testReturn()
                    testBreak()
                    testContinue()`}}</code>
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

            }
        },
        created() {

        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>

</style>
