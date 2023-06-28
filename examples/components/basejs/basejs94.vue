<template>
    <div class="content-box">
        <h2 class="demo-title">vue.js原理以及js原型链深究</h2>
        <div style="line-height: 30px">
            <p>
                在进行vue.js原理学习之前，我们先来理解一波前端的mvc和mvvm架构 <br>
                mvc：model(模型)、view(视图)、controller(控制器) <br>
                mvvm：model、view、view-model(视图模型) view-model主要是进行双向数据绑定进行交互，mvvm解决了mvc中大量的dom操作，
                加载速度更快，用户体验更好
            </p>
            <p>
                那这里我们使用vue.js，实际上就是广义的mvvm方式，他和react的区别的可以通过v-model进行自动的双向数据绑定实现数据修改，
                这里vue.js的双向数据绑定，主要通过Object.defineProperty属性中的get以及set进行修改
            </p>
            <p>
                这里有关vue.js的双向数据绑定，我们可以通过test.html里面写了一个对应的案例，用于模拟实现vue.js双向数据绑定原理
            </p>
        </div>
        <div>
        </div>
        <div style="margin-top: 10px">
            <pre class="mypre">
                https://www.jb51.net/article/106484.htm
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
            return {
                testValue: {
                    a: 1234
                },
                testA: [1234]
            }
        },
        created() {
            console.log(this.testValue)
            console.log(this.testA)
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
