<template>
    <div class="content-box">
        <h2 class="demo-title">js去重神器set以及对应数据结构</h2>
        <div style="line-height: 30px">
            <p>
                Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
            </p>
            <p>
                根据实际的研究发现，set进行去重比较的时候，比较方式类似于===的情况，会比较数据内容以及类型是否都一致
            </p>
            <p>
                但是这里使用set，只能用于数组，但是对于数组内容作为比较复杂的对象就比较困难了
            </p>
        </div>
        <pre class="mypre">
// 首先可以看看拓展运算符 三点作用：将一个数组转为用逗号分隔的参数序列
let ax = [1,2,4,5,6]
let bx= [10,10,10, ...ax]
console.log(...ax)  //1 2 4 5 6
console.log(bx) // [10,10,10,1,2,4,5,6]

// set：对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
let s = new Set()
bx.forEach(x => s.add(x))
console.log(s)  //输出Set(6){10, 1, 2, 4, 5}
console.log([...s]) // [ 10, 1, 2, 4, 5, 6 ] 这里是对bx的去重处理并转为数组
console.log(Array.from(s)) // [ 10, 1, 2, 4, 5, 6 ] 这里也可以通过Array.from转为数组

// 这里有关去重可以简写，例如
let cx = [1, 2, 3, 4, 5, 5, 5, 5]
console.log([...new Set(cx)]) // [ 1, 2, 3, 4, 5 ]

// 进行数组中的元素是字符串的情况进行去重去重
let zx = ['2','4','5','2']
console.log([...new Set(zx)]) // [ '2', '4', '5' ]

// 我们通过set和join的属性还能进行字符串去重：join是将数组转为字符串，默认,隔开
let teststrgin = 'anbhsdfhshh'
console.log([...new Set(teststrgin)].join(""))
        </pre>
        <fhv-el-demo-block :height="450" :showInfo="true" :hideButton="false" id="button-simple">
            <template v-slot:code>
<!--                <code class="hljs" style="padding-top: 0 !important;">{{
                    `// 这里可以通过两层for循环进行比较，这样的比较比较常用和可靠
let arr = [20,30,20,30,10,5,6,5,6,7];
let arrAry = [{id: 200},{id: 30},{id:20},{id:30},{id:10},{id:5},{id:6},{id:5},{id:6},{id:7}]
function returnArray(arr, value) {
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (value) {
            if (arr[i][value] === arr[j][value] && i !== j) {
                arr.splice(j, 1)
            }
        } else {
            if (arr[i] === arr[j] && i !== j) {
                arr.splice(j, 1)
            }
        }
    }
}
return arr
}
console.log(returnArray(arr))
console.log(returnArray(arrAry, 'id'))
                    `}}</code>-->
            </template>
        </fhv-el-demo-block>
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
