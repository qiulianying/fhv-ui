<template>
    <div class="content-box">
        <h2 class="demo-title">js变量定义以及相关深究</h2>
        <pre class="mypre">
<span class="myTitle">简要记忆：提升就是把函数或者变量的定义统统搞到当前的最前面</span>
let和var外加const的关系区别
(1)、作用域的区别
(2)、使用let或者const声明的变量和函数不会出现变量提升或者函数提升的问题
(3)、let和const不能在相同作用域中重复定义相同变量，但是如果使用var的话，执行的就是覆盖(这里注意const定义变量之后补不能修改基础类型，let和var可以)

<span class="myTitle">这里需要注意下，const不能修改基础类型，但是可以修改数据类型</span>
const ax = 22222
ax = 222222222
console.log(ax)     // 修改基础类型不行，报错

//不能修改基础类型，但是可以修改数据类型
const bx = [333]
const cx = {name: '123456'}
bx[0] = 444
cx.name = 10086
console.log(bx) // [444]
console.log(cx) // {name: 10086}
        </pre>
        <fhv-el-demo-block :height="300" :showInfo="true" :hideButton="false" id="button-simple">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    // 主要集中在作用域和变量提升方面
                    // 作用域不说了，这里主要描述变量提升，什么是变量提升
                    function f() {
                    console.log(a);
                    var a = 11111
                    }
                    f(); // undefined，方法中没有出现变量提升
                    这里的执行分析相当于是
                    function f() {
                    var a
                    console.log(a)
                    var a = 1111
                    }

                    a = 1
                    var a;
                    console.log(a) // 1 这里就存在变量提升
                    这里执行分析相当于是
                    var a
                    a = 1
                    console.log(a)`}}</code>
            </template>
        </fhv-el-demo-block>
        <pre class="mypre">
这里之所以会有这种情况，是由于浏览器执行代码方式，一般来说浏览器是顺序执行，在编译的过程中，先将标识符和函数声明给提升到<span class="myTitle">其对应的作用域的顶端</span>。标识符解析的时候，会进行LHS查询，在LHS查询的时候，如果标识符一直找不到声明的位置，那么最终就会在全局环境生成一个全局变量。 LHS ： 指的是赋值操作的左端，<span class="myTitle">简单的来说，就是遇到找不到被声明的变量，会自动搞一个全局的</span>
        </pre>
        <fhv-el-demo-block :height="300" :showInfo="true" :hideButton="false">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    // 这里说到的js会在编译的事发后，将标识符合函数声明提升到对应作用域，这需要好好理解下，例如
                    function hoistVariable() {
                    if (!foo) {
                    var foo = 5;
                    }
                    console.log(foo); // 5
                    }
                    hoistVariable();
                    这里通过js编译之后执行相当于是
                    function hoistVariable() {
                    var foo
                    // 这里检查到foo未定义，给在方法的作用域中提到最前
                    if (!foo) {
                    foo = 5;
                    }
                    console.log(foo); // 5
                    }
                    hoistVariable();
                    // 如果有多个作用域，就会依次提到最前
                    function hoistVariable() {
                    var foo = 3;
                    {
                    var foo = 5;
                    }
                    console.log(foo); // 5
                    }
                    hoistVariable();
                    // js执行类似于
                    function hoistVariable() {
                    var foo;
                    foo = 3;
                    {
                    foo = 5;
                    }
                    console.log(foo); // 5
                    }
                    hoistVariable();`}}</code>
            </template>
        </fhv-el-demo-block>
        <pre class="mypre">
这里函数提升也是类似的，会将函数统统按照顺序推到前面去，而且函数作为js世界中的一等公民，函数的顺序会在变量定义定义之前
        </pre>
        <fhv-el-demo-block :height="300" :showInfo="true" :hideButton="false">
            <template v-slot:code>
                <code class="hljs" style="padding-top: 0 !important;">{{
                    `
                    var foo = 3;
                    function hoistFunction() {
                    console.log(foo); // function foo() {}
                    foo = 5;
                    console.log(foo); // 5
                    function foo() {}
                    }
                    hoistFunction();
                    console.log(foo);     // 3

                    // 这里在js中实际的执行方式为
                    var foo = 3;
                    function hoistFunction() {
                    var foo;
                    foo = function foo() {};
                    console.log(foo); // function foo() {}
                    foo = 5;
                    console.log(foo); // 5
                    }
                    hoistFunction();
                    console.log(foo);    // 3
                    `}}</code>
            </template>
        </fhv-el-demo-block>
        <pre class="mypre">
<span class="myTitle">所以，函数的优先权是最高的，它永远被提升至作用域最顶部，然后才是函数表达式和变量按顺序执行，这一点要牢记</span>
这里我们再举一个例子
foo()
var foo
function foo() {
    console.log('这里是1')
}
foo = function () {
    console.log('这里是2')
}
foo()
<span class="myTitle">//这里实际的执行结果是如下，这里函数提升，就是一定会把函数提升到调用之前 </span>
function foo() {
    console.log('这里是1')
}
foo()
var foo
foo = function () {
    console.log('这里是2')
}
foo()
结果：这里是1  这里是2  这里就很明显的知道了为什么会先输出这里是1了

如何解决变量提升带来的问题
(1)、使用let或者const，特别是新项目中
(2)、养成无论方法还是变量先声明后时候的编码习惯

拓展：java和javascirpt有关变量申明的区别
java的编写模式非常类似于javascript的严格模式，例如java中定义整数int number = 10;String ax = "0000";需要类型进行指定
而javascirpt作为弱类型一般来说就非常简单，例如：let ax = ''; let ax = function() 变量可变万物
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
