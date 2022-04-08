<template>
    <div class="content-box">
        <h2 class="demo-title">display flex的详细解析</h2>
        <p class="demo-introduction">1、这里主要指出有关flex布局的常用项以及快速记忆入手，只列举常用重点</p>
        <p class="demo-introduction">2、这里样式编写直接使用scss</p>
        <p class="demo-introduction"><a href="https://www.runoob.com/w3cnote/flex-grammar.html">3、详细参考文献</a></p>

        <div style="margin-top: 20px">
            <h3>flex布局</h3>
            <p>Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。</p>
            <p>任何一个容器都可以指定为Flex布局。</p>
            <p class="red">注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p>
        </div>

        <div class="flexTest">
            <div v-for="item in 6" :key="item" class="myDivTest">
                {{item === 5 ? '这里内容比较多的会默认宽度变多' : item}}
            </div>
        </div>
        <fhv-el-demo-block :height="910" :title="'相关代码'">
            <template v-slot:code>
                <code class="html">{{fCode(simple.code.html)}}</code>
                <code class="javascript">{{fCode(simple.code.css)}}</code>
            </template>
        </fhv-el-demo-block>

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
                simple: {
                    code: {
                        html: `
                                <div class="flexTest">
            <div v-for="item in 6" :key="item" class="myDivTest">
                {{item === 5 ? '这里内容比较多的会默认宽度变多' : item}}
            </div>
        </div>
                        `,
                        css: `
    /*
    针对flex这里我们可以看到常用的样式包括
    父类项：
    display: flex | inline-flex;          // 设置项目上一级
    justify-content: space-between | space-around; // 对齐方式，这里主轴默认从左到右
    align-items: center;    // 定义在交叉轴上的对齐方式，这里主轴默认从上到下
    子项目类项：
    flex-grow: 1;   // 默认0空间即使有剩余也不放大，其余情况下，根据输入的比例进行平分
    // 子项目类项比例不同，也会按照不同比例
    */
    .flexTest {
        margin-top: 20px;
        width: 100%;
        background-color: #ff6600;
        height: 100px;
        display: flex;          // 设置项目上一级
        justify-content: space-between; // 对齐方式，这里主轴默认从左到右
        align-items: center;    // 定义在交叉轴上的对齐方式，这里主轴默认从上到下

        .myDivTest {
            flex-grow: 1;   // 默认0空间即使有剩余也不放大，其余情况下，根据输入的比例进行平分
            height: 50px;
            line-height: 50px;
            border: 1px solid #2cbfbe;
            text-align: center;
            background-color: #fe6c6f;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }

        .myGrow {
            flex-grow: 4
        }
    }
                        `
                    },
                },
            }
        },
        created() {
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .red {
        color: red;
    }
    /*
    针对flex这里我们可以看到常用的样式包括
    父类项：
    display: flex | inline-flex;          // 设置项目上一级
    justify-content: space-between | space-around; // 对齐方式，这里主轴默认从左到右
    align-items: center;    // 定义在交叉轴上的对齐方式，这里主轴默认从上到下
    子项目类项：
    flex-grow: 1;   // 默认0空间即使有剩余也不放大，其余情况下，根据输入的比例进行平分
    // 子项目类项比例不同，也会按照不同比例
    */
    .flexTest {
        margin-top: 20px;
        width: 100%;
        background-color: #ff6600;
        height: 100px;
        display: flex;          // 设置项目上一级
        justify-content: space-between; // 对齐方式，这里主轴默认从左到右
        align-items: center;    // 定义在交叉轴上的对齐方式，这里主轴默认从上到下

        .myDivTest {
            flex-grow: 1;   // 默认0空间即使有剩余也不放大，其余情况下，根据输入的比例进行平分
            height: 50px;
            line-height: 50px;
            border: 1px solid #2cbfbe;
            text-align: center;
            background-color: #fe6c6f;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }

        .myGrow {
            flex-grow: 4
        }
    }
</style>
