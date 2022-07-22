<template>
    <div class="content-box">
        <h2 class="demo-title">js闭包深究</h2>
        <div style="line-height: 30px">
            闭包就是能够读取其他函数内部变量的函数，有关特性有：<br>
            (1)、函数内部可以嵌套函数; <br>
            (2)、内部函数可以直接访问外部函数的参数和变量；<br>
            (3)、参数和变量不会被垃圾回收机制回收，使得内存无法释放
        </div>
        <div>
            那么为什么会有用到闭包的情况呢，我们可以回顾之前的作用域和变量的知识点，
            <span style="color: red">变量分为全局变量(属于window对象，处处都在)和局部变量(函数内部的，只在函数内部起作用)</span>，
            全局和局部变量即便名称相同，它们也是两个不同的变量。修改其中一个，不会影响另一个的值。
            但是很多情况下，我们需要使用到内部变量进行操作，这种情况下就需要闭包
        </div>
        <div>
            ()：自调函数，被()包裹的会自动执行一遍，例如(function () {var counter = 0;console.log(counter)})();
        </div>
        <div style="margin-top: 10px">
            <pre class="mypre">
这里我们写一个简单的闭包函数
//声明函数fn
function fn() {
    // 创建n作为私有局部变量，给内函数使用
    let n = 0;
    //内层函数
    return function() {
        return n += 1;
    }
}
//fn()返回的是嵌套（里层）的函数体，我们type of a是function type of a()是number
let a = fn ()
console.log(a()) // 1
console.log(a()) // 2
console.log(a()) // 3

// 这里我们再来介绍一个更加项目的案例；备注：reduce(function() {})方法，可以用于进行数组便利计算
function sum(array, index) {
    return array.reduce((total, currentval) => {
        return total + currentval
    })
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))    // 计算出总和55

// 通过闭包创建一个内部函数，需要调用的时候进行实现
function lazy_sum(array) {
    // 创建私有对象
    let ax = 2
    return function sum() {
        return array.reduce((total, currentval) => {
            return (total + currentval) * ax  // 将私有对象进行使用
        })
    }
}
let f = lazy_sum([1,2,3,4,5,6,7,8,9,10])   // // function sum()
console.log(f())    // f(); // 3560 这时候才是真正调用
            </pre>
        </div>
        <div style="margin-top: 10px;color: red">
            这里为什么要用到闭包，我们可以这样想想，java和c里面，如果创建一个私有变量，可以通过private进行修饰，但是js里面没有日了狗的class机制，只有函数机制
            所以，如果js中要创建一个私有变量，就只能用闭包函数的方式，如下
        </div>
        <pre class="mypre">
// 创建一个私有变量
function create_count(inital) {
    // 这里创建一个私有变量
    // ax计数器被这个匿名函数的作用域保护，并且只能使用函数来修改，无法直接访问
    let ax = inital || 0
    return function () {
        return ax += 1
    }
}
let c1  = create_count()
c1()   // 1  这里对闭包函数调用不会互相影响，且通过这种方式访问到了对应变量ax
c1()   // 2  之类必须调用c1()
c1()
let c2 = create_count(10)
c2()   // 11
// 上面的方法也可以写为函数自掉模式处理
let c3 = (function (inital) {
    let ax = inital || 0
    return function () {
        return ax += 1
    }
})()
c3()    // 1
<span style="color: red">// 由于闭包对内存和性能的消耗，一般慎用，以及销毁，一般用null(参考js内存机制)，否则就只有关闭页面才销毁</span>
c1 = null
c2 = null
c3 = null
        </pre>
        <div style="margin-top: 20px">
            <p style="margin-bottom: 10px">
                总计：闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。 <span style="color: red">直观的说就是形成一个不销毁的栈环境</span>。
                这个是优点，同时也导致内存和性能的确定，所以谨慎使用，及时销毁
            </p>
            <p>
                <a href="https://www.runoob.com/js/js-function-closures.html" target="_blank">参考文献js菜鸟教程闭包</a>
            </p>
            <p>
                <a href="https://www.runoob.com/js/js-function-closures.html" target="_blank">用于数组类型新增返回结果的神器reduce()方法</a>
            </p>
            <p>
                <a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1023021250770016" target="_blank">js闭包讲解</a>
            </p>
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/03/15 11:35
     */
    export default {
        data() {
            return {}
        },
        created() {
        },
        mounted() {

        },
        unmounted() {
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .allChange {
        display: inline-flex;
        margin: 20px 0;

        .zfx {
            margin-right: 40px;
            width: 0;
            height: 0;
            border-top: 20px solid;
            border-bottom: 20px solid;
            border-left: 20px solid;
            border-right: 20px solid;
        }

        .sanjiaoleft {
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 20px solid;
            border-right: 20px solid transparent;
        }

        .sanjiaoright {
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 20px solid transparent;
            border-right: 20px solid;
        }

        .query {
            margin-left: 40px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #000000;
        }
    }
</style>
