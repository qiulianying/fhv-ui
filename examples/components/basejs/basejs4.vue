<template>
    <div class="content-box">
        <h2 class="demo-title">数据类型，对象原型以及内存深究</h2>
        <pre class="mypre">
这里我只进行粗略的结果讲解以及快捷记忆，详细的具体案例流程提供对应的链接

javascript属于高度面向对象(OOP)的编程，但是js和传统面向对象例如c++或者是java又有写不同，它没有像许多面向对象的语言一样有用于创建class类的声明。JavaScript 用一种称为构建函数的特殊函数来定义对象和它们的特征。

有关js数据类型，有这两个可以额外注意下，undefined和null
Undefined：这个值表示变量不含有值。
null：表示什么都没有，<span class="myTitle">可以通过将变量的值设置为 null 来清空变量，当使用完一个比较大的对象时，需要对其进行释放内存时，设置为 null</span>

栈内存(Stack)：主要就是保存基础类型：Boolean,Null,Undefined,Number,String,Symbol(Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。)
堆内存(Heap)：主要保存对象类型(复杂数据类型)：Object,Array,Function,RegRxp(正则),Date(日期)，其实这些都能算是object对象类型
变量的内存保存方式可以看
<a href="https://www.runoob.com/js/js-datatypes.html" target="_blank">JavaScript数据类型</a>
<a href="https://www.runoob.com/w3cnote/javascript-basic-types-and-reference-types.html" target="_blank">JavaScript 深入了解基本类型和引用类型的值</a>
<a href="https://www.runoob.com/w3cnote/javascript-basic-reference-object-types.html" target="_blank">JavaScript 基本类型 引用类型 简单赋值 对象引用</a>

有关判断数据类型的方法：
typeof：常用来检测一个变量是不是最基本的数据类型；let ax = null console.log(typeof ax) // object，这里typeof对null的判断有异议，其他的都还较为准确
instanceof：<span class="myTitle">运算符用于检测某个构造函数(constructor)的prototype属性是否出现在某个实例对象(object)的原型链上。</span>
对于typeof，我们都比较好理解，对于instanceof的理解就要慢慢来了，这里涉及到构造函数，对象，属性
对于对象和属性：let ax = {color: '234234', name: ['1','2'], test: function () {console.log(this.name[0]))}}，ax作为对象，color是这个对象的属性，test是ax对象的方法；
这里我们也看到了this的使用，<span class="myTitle">this 指向了代码所在的对象(其实代码运行时所在的对象)</span>，this在于动态创建对象的时候是非常有用的
我的理解是，在js中，万物皆对象，例如var myDiv = document.createElement('div'); <span class="myTitle">实际上，这里使用功能的是document对象中的属性和方法而已，Document实例在页面加载完后被创建，代表了整个页面的结构，内容和一些功能</span>
对于js的使用，实际上就是对于对象以及对象属性的各种使用，例如let myString = "this is a string"，myString中立刻就有了能够使用的属性方法，例如 split()、indexOf()、replace() 等

<span class="myTitle">constructor：每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。</span>
<span class="myTitle">prototype：每个实例对象中都存在的属性，能够进行类似数据库的增删改查操作</span>
这里我们可以看看下面一个创建对象以及构造函数的简单案例，有关constructor和protytype都有详细展示
<fhv-el-demo-block :height="300" :showInfo="true" :hideButton="false" id="button-simple">
            <template v-slot:code>
                <code class="hljs javascript" style="padding-top: 0 !important;">{{
                    `function createNewPerson(name) {
    let obj = {};
    obj.name = name;
    obj.greeting = function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
    return obj;
}
let salva = createNewPerson('salva')  // 函数的调用
salva.greeting()    //Hi! I'm salva.

// 构造函数
function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' +
            this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}
// 对构造方法加入新的属性
Person.prototype.foo = "Person构造函数添加新属性foo";
// 这里使用new，用于告知浏览器我们想要创建一个对象，非常类似函数调用，并把结果保存到变量中
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person1.bio()     //Hi! I'm tesest.
// 为person1添加新属性
person1.addValue = 'person1新增属性'
console.log(person1.foo)
let person2 = Object.create(person1) // 基于现有对象创建新的对象
person2.greeting() //Hi! I'm Bob. person2是基于person1创建的， 它们具有相同的属性和方法
console.log(person1.constructor)    // 我们会发现构造实例对象person1构造器指向的是构造函数Person方法

// 对应的方法可以通过下面的技巧性使用功能再次用于创建和执行
let person3 = new person1.constructor('person3', 'person3last', 11, 'male', ['av', 'gv']);
person3.greeting()          // Hi! I'm person3.
console.log(person3.foo)    // Person构造函数添加新属性foo`}}</code>
            </template>
        </fhv-el-demo-block>
到此，我们对构造函数以及属性控制和相关继承就有了简单的了解了

拓展：有关内存和对应变量的拓展了解
一般来说java和javascript都有自动清理内存的机制，但是前端和后端不一样，前端注重页面交互，而前端的内存清理很多都是在浏览器关闭页面之后执行的，所以这里需要涉及到我们手动释放实现更好的交互
1、<span class="myTitle">js中全局变量(页面关闭清理)，局部变量(函数完成后清理)</span>，所以我们一般尽量使用局部变量，全局可以通过 = null的方式进行手动解除引用进行清理内存
2、减少对闭包的使用
3、针对定时器循环的清理，

参考文献，基本上是里面的流程：<a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects">JavaScript 对象入门</a>
ps；按照里面的顺序一路看下来基本上就了解了，但是作者的入门和我们理解的不同，我认识是需要一定的前端经验才能通读
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
            return {}
        },
        created() {

        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
    .container input::-webkit-outer-spin-button,
    .container input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .container input[type='number'] {
        -moz-appearance: textfield;
    }
</style>
