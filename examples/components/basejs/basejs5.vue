<template>
    <div class="content-box">
        <h2 class="demo-title">数据类型继承概念深究</h2>
        <div style="line-height: 30px">
            <p>
                针对js中的继承的了解，其实我们编写一般的小型项目其实不会怎么用到，但是当我们使用大型项目的时候，我们就会发现继承的有点，这里
                也是有点把继承类似比作vuex的原因，当你需要他，自然就会用到他
            </p>
            <p>
                这里我们会通过普通案例以及es6中最新的写法，分别讲述继承的定义
            </p>
            <p>
                如果对立面call用法和this指向看不懂的，可以先看后续this的章节，有详细介绍
            </p>
            <pre class="mypre">
<span class="myTitle">// 这里我们先看看普通js，通过继承一个构造函数，再去创建一个新的对象</span>
// 创建一个构造函数
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
Person.prototype.school = 'test school'
Person.prototype.greeting = function (like) {
    // 这里的this的指向，指向当前代码运行时所在的对象，this.name指的是当前对象下的name
    console.log('Hi! I\'m ' + this.name.first + '.' + '喜欢' + like);
}
let student2 = {
    name: {  // 这里如果想要替代，就要使用一样的格式
        first: '小红',
        last: '大红'
    }
}
// 再创建一个构造函数Teacher，具备Person所有属性，额外有个subject属性作为教师独有的
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject
}
let teather1 = new Teacher('小泽', '大泽', 26, 5, '足球', '化学')
console.log(teather1)

<span class="myTitle">// 通过class类操作写法 class的写法更加类似java中的定义对象的面向对象方式</span>
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    greeting(like) {
        // 这里的this的指向，指向当前代码运行时所在的对象，this.name指的是当前对象下的name
        console.log('Hi! I\'m ' + this.name.first + '.' + '喜欢' + like);
    }
    farewell() {
        console.log(`${this.name.last} has left the building. Bye for now!`);
    }
}
// 使用extends可以在构造函数继承其他构造函数
class Teacher extends Person{
    // 写入新的方法
    constructor(first, last, age, gender, interests, subject, grade) {
        // super关键字用于访问和调用一个对象的父对象上的函数，在使用this关键字之前使用
        super(first, last, age, gender, interests);
        this.subject = subject;
        this.grade = grade;
    }
}
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
console.log(snape)
// Teacher {name: { first: 'Severus', last: 'Snape' },age: 58, gender: 'male', interests: [ 'Potions' ], subject: 'Dark arts', grade: 5}


拓展：针对react的分析
react中我们也是通过class创建的方式进行的，大量使用到extends继承，以及bind进行额外指向
不过现在react推出了hooks钩子方式，区分为类写法以及函数写法，这个可以后面研究的时候学习一下
            </pre>
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
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
</style>
