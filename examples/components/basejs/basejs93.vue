<template>
    <div class="content-box">
        <h2 class="demo-title">webpack的技巧</h2>
        <div style="line-height: 30px">
            <p>
                webpack原理：简单来说，webpack就是就是分析代码，找到“require”、“exports”、“define”等关键词，并替换成对应模块的引用。
                在一个配置文件中，指明对某些文件进行编译、压缩、组合等任务。把你的项目当成一个整体，通过一个给定的主文件（index.js），webpack将从这个文件开始找到你的项目的所有的依赖文件，使用loaders处理他们，最后打包为一个浏览器可、
                以识别的js文件。
            </p>
            <p>
                有关webpack的实际操作我们可以看文档，这里我们主要描述一些能够在项目中起到帮助开发的一些webpack的api
            </p>
        </div>
        <div>
        </div>
        <div style="margin-top: 10px">
            <pre class="mypre">
// 例如我们使用功能的非常多的一个就是通过webpack下的require.context进行前端工程化导入(只要依赖有webpack即可)
/*
require.context(directory, useSubdirectories = false, regExp = /\.\//)
directory：要搜索的文件夹目录
useSubdirectories：是否还应该搜索它的子目录
regExp：一个匹配文件的正则表达式
* */
const baseRouterArray = require.context('../components/basejs', false, /.vue$/)
console.log(baseRouterArray)
这里webpack注意只能在安装了webpack的项目中进行全局使用，其他情况下如果如果再js中单独执行会出问题
            </pre>
        </div>
        <div style="margin-top: 20px">
            <p>

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
