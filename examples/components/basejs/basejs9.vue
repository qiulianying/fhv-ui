<template>
    <div class="content-box">
        <h2 class="demo-title">this的深究以及call、apply、bind</h2>
        <div style="line-height: 30px">
            <p>
                在js中，我们对于this的使用非常常见，如果提问this代表什么，我们其实有一个很简单的回答：this 指向了代码所在的对象(其实代码运行时所在的对象)
            </p>
            <p style="color: red">
                而我们在js中，经常需要调用其他对象中的方法，而如果这个对象方法中有this进行了指向，那么call、apply、bind就是允许您调用一个在这个文件里别处定义的函数以及
                传入新的指向的最好方法
            </p>
            <p>
                这里之所以call、apply、bind和this一起，是因为他们在调用不同对象的方法时，还能够改变this指向
            </p>
            <p>
                <a href="https://www.runoob.com/w3cnote/js-call-apply-bind.html">参考文献1</a>
                <a href="https://www.w3school.com.cn/js/js_function_call.asp" style="margin-left: 30px">参考文献2</a>
            </p>
        </div>
        <pre class="mypre">
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
// 创建一个student1，这种情况下student1作为对象也包括了greeting方法
let student1 = new Person('小明', '大明', 16, 5, '足球')
let student2 = {
    name: {  // 这里如果想要替代，就要使用一样的格式
        first: '小红',
        last: '大红'
    }
}
student1.greeting('游泳') // Hi! I'm 小明.喜欢游泳 这里调用方法，里面的this.name指向当前对象
student1.greeting.call(student2, '打球') // Hi! I'm 小红.喜欢打球
student1.greeting.apply(student2, ['打兵乒球'])// Hi! I'm 小红.喜欢打兵乒球
student1.greeting.bind(student2, '打羽毛球')()// Hi! I'm 小红.喜欢打羽毛球 这里可以看出bind返回的是函数
// 再创建一个构造函数Teacher，具备Person所有属性，额外有个subject属性作为教师独有的
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    // Person.bind(this, first, last, age, gender, interests)()
    this.subject = subject
}
let teather1 = new Teacher('小泽', '大泽', 26, 5, '足球', '化学')
console.log(teather1) // 之类创建除了一个teather1的老师对象
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
</style>
