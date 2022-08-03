<template>
    <div class="content-box">
        <h2 class="demo-title">js各类循环体系</h2>
        <pre class="mypre">
这里进行for，for in，forEach，map，while等多种循环的研究区分
        </pre>
        <fhv-el-demo-block :height="200" :showInfo="true" :hideButton="false">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    // 首先是for循环，这个使用的最多，可以广泛使使用在大部分场景中
                    var ax = 0
                    for (var bx = 0; bx &lt; 10; bx ++) {
                    ax = ax + 1
                    }
                    console.log(ax) // 10
                    console.log(bx)
                    // 10，这里由于for这里使用的是var，所以作用域全局可用，这也是我们推荐使用let的原因，使用let就只会在for循环方法中有效`}}</code>
            </template>
        </fhv-el-demo-block>
        <pre class="mypre">
这里我们衍生一个知识点，js是作为单线程操作，另一段代码想要执行就必须等当前代码执行完成后才可以进行，例如
        </pre>
        <fhv-el-demo-block :height="250" :showInfo="true" :hideButton="false">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    for (var ax = 1; ax &lt; 4; ax ++) {
                    setTimeout(function () {
                    console.log(ax)  // 3, 3, 3
                    }, 0)
                    }
                    在执行过程中，先遇到for循环，for循环先进入线程。
                    当i=1时，循环走到setTimeOut后，此时的for循环还没完成，
                    setTimeOut就会被放入一个地方（线程池）等待执行。
                    此时for循环继续执行，……依次类推，，而for循环执行完成后，i变成了4，
                    然后才开始执行setTimeout中的函数
                    如果要解决这个问题，可以把var换成let`}}</code>
            </template>
        </fhv-el-demo-block>
        <pre class="mypre">
<span style="color: red">这里for/in可以遍历数组和对象</span>，forEach只能是数组，但是这里更加推荐使用es6中的for/of，这个属于兼顾了for/in和forEach的好处和解决了缺点，例如for/in会跳过数组中为null或者undefined的东西,但是这里我们也需要注意，for of也是只能作用在数字上面，
        </pre>
        <fhv-el-demo-block :height="350" :showInfo="true" :hideButton="false">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    let ax = new Array()
                    for (let cx = 0; cx &lt; 10; cx ++) {
                    if (cx % 2 !== 0) {
                    ax[cx] = cx
                    }
                    }
                    for (let z in ax) {
                    console.log(z) // 1,3,5,7,9 跳过了undefined没定义的
                    }
                    for (let zz of ax) {
                    console.log(zz) //这里会把undefined不会跳过，也会进行输出
                    }
                    console.log(ax.length)  // 10，这是是实际的数据内容`}}</code>
            </template>
        </fhv-el-demo-block>
        <pre class="mypre">
所以一般来说，使用功能循环for of(数组)循环是最优解,for of也只能用于数组
有着同for...in一样的简洁语法，但是没有for...in那些缺点(for in更加适合对象)。
不同于forEach方法，它可以与break、continue和return配合使用，forEach是无法中途退出的
提供了遍历所有数据结构的统一操作接口。

// map/reduce概念
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 这里map的函数形式和forEach基本一致
arr.map((value, index, array) => {})
// map可以直接传入函数进行后处理
function f(ax) {
    return ax * ax
}
console.log(arr.map(f)) // [1,  4,  9, 16, 25,36, 49, 64, 81]

// 一般情况下，为了防止map出现诡异的错误(比如传入参数实际上会和使用函数造成偏差)
let arr10 = ['1', '2', '3'];
console.log(arr10.map(parseInt))    // [1,NaN,NaN] 这里因为parseInt(value, index)是两个传入参数导致的
// 如果要解决
let mylast = []
arr10.map((value, index, array) => {
    mylast.push(parseInt(value))
})
console.log(mylast)             // 正常 [1,2,3]

// reduce和map区别：把结果继续和序列的下一个元素做累积计算，并返回结果
let brr = [1, 3, 5, 7, 9];
let last = brr.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentIndex
})
console.log(last)       // 返回相加 11
        </pre>
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
