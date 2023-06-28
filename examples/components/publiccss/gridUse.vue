<template>
    <div class="content-box">
        <h2 class="demo-title">display grid布局的详细解析</h2>
        <p class="demo-introduction">1、这里样式编写直接使用scss</p>
        <p class="demo-introduction"><a href="https://www.runoob.com/w3cnote/flex-grammar.html">3、详细参考文献</a></p>

        <div style="margin-top: 20px">
            <h3>Grid布局</h3>
            <p>Grid 布局即网格布局，是一种新的 CSS 布局模型，比较擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系。号称是最强大的的 CSS 布局方案，是目前唯一一种 CSS 二维布局</p>
        </div>

        <h3 style="margin-top: 20px">基本grid布局使用</h3>
        <div class="gridtest">
            <div v-for="(item, index) in gridtestArray" :key="index" class="griditem" :style="{background: item.bgcolor}">
                {{item.title}}
            </div>
        </div>

        <h3 style="margin-top: 20px">深入grid布局使用</h3>
        <p>{{publishedBooksMessage}}</p>
        <div class="gridtestone">
            <div v-for="(item, index) in gridtestArray" :key="index" class="griditem" :style="{background: item.bgcolor}">
                {{item.title}}
            </div>
        </div>

        <div>测试全局scss样式使用</div>
        <div class="myTest">
            测试多层嵌套异步10秒
        </div>
    </div>
</template>

<script>
    /**
     * @author: 冯耀华
     * @Date: 2022/04/08 15:06
     */
    export default {
        data() {
            return {
                nowIndex: 10,
                gridtestArray: [
                    {
                        bgcolor: '#19CAAD',
                        title: 'one'
                    },
                    {
                        bgcolor: '#8CC7B5',
                        title: 'two'
                    },
                    {
                        bgcolor: '#D1BA74',
                        title: 'three'
                    },
                    {
                        bgcolor: '#BEE7E9',
                        title: 'four'
                    },
                    {
                        bgcolor: '#E6CEAC',
                        title: 'five'
                    },
                    {
                        bgcolor: '#ECAD9E',
                        title: 'six'
                    }
                ],
                ax: {
                    name: '2222',
                    type: 33
                },
                bx: {
                    name: '2222',
                    type: 33
                },
                someObject: {},
                test1: '',
                test2: ''
            }
        },
        created() {
            console.log(Object.is(this.ax, this.bx))
        },
        async mounted() {
            const newObject ={}
            this.someObject = newObject
            await this.testasync()
            console.log('执行testasync成功')
            console.log(newObject === this.someObject) // false
        },
        computed: {
            // 一个计算属性的 getter
            // 计算属性和方法有同样效果，但是
            publishedBooksMessage() {
                // `this` 指向当前组件实例
                return this.gridtestArray.length > 0 ? '存在数据' : '不存在数据'
            }
        },
        components: {},
        methods: {
            testasync() {
                return new Promise( (resolve) => {
                    setTimeout(async () => {
                        await this.toOther()
                        resolve()
                    }, 5000)
                })
            },
            toOther() {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, 5000)
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .griditem {
        text-align: center;
        font-size: 200%;
        color: #fff;
    }

    .gridtest {
        margin: 20px;
        /* 声明一个容器 */
        display: grid;
        /*  声明列的宽度  */
        grid-template-columns: repeat(3, 200px); // 表示一行能够放下的数量以及这一列宽度
        /*  声明行间距和列间距  */
        grid-gap: 20px;
        /*  声明行的高度  */
        grid-template-rows: 100px 200px; // 设置第一行和第二行的高度
    }

    .gridtestone {
        margin: 20px;
        /* 声明一个容器 */
        display: grid;
        /*  声明行间距和列间距  */
        grid-gap: 30px;
        /*  声明列的宽度  */
        grid-template-columns: 1fr 3fr 2fr;
        /* 行高 */
        grid-template-rows: 100px 150px;

        .griditem {
            /* 指定第一个元素进行操作 */
            &:nth-of-type(1) {
                /**/
                grid-column: 1 / span 3;
            }
        }
    }

    .myTest {
        background: $--color-primary;
        width: vw(300);
        height: vh(300);
    }
</style>
