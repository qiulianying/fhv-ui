<template>
    <div class="content-box">
        <h2 class="demo-title">js中的数组排序神器sort</h2>
        <div style="line-height: 30px">
            <p>sort排序的原理在于将数组中需要排序的内容toString()字符串后，再进行排序操作</p>
            <p>sort的排序，推荐附带方法</p>
            <p>注意：sort对数组的排序会修改到原数组，所以需要根据需求是否需要进行数据克隆</p>
        </div>
        <pre class="mypre">
let takeTes = ['z', 'ccc', 'alert', 'boduo', 'yy', 'bilibili']
// [ 'alert', 'bilibili', 'boduo', 'ccc', 'yy', 'z' ] 默认进行字母顺序排序
console.log(takeTes.sort())

let myArray = [40, 100, 1, 5, 25, 10]
// 由于sort会改变原数据，所以这里使用JOSN方式进行克隆
/*
* 在默认情况下， sort() 方法按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。为了实现排序，
* sort() 方法会调用每个数组项的 toString() 转型方法，然后比较得到的字符串，以确定如何排序。
* 即使数组中的每一项都是数值， sort() 方法比较的也是字符串，如下所示：
* */
console.log((JSON.parse(JSON.stringify(myArray))).sort()) // [ 1, 10, 100, 25, 40, 5 ] 排序错误
/*
* 可见，即使例子中值的顺序没有问题，但 sort() 方法也会根据测试字符串的结果改变原来的顺序。因为数值 5 虽然小于 10，但在进行字符串比较时，
* "10" 则位于 "5" 的前面，于是数组的顺序就被修改了。不用说，这种排序方式在很多情况下都不是最佳方案。
* 因此 sort() 方法可以接收一个比较函数作为参数，如下面操作所示
* */
console.log((JSON.parse(JSON.stringify(myArray))).sort((a, b) => a - b)) // [ 1, 10, 100, 25, 40, 5 ] 排序错误

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return b - a
});
console.log(points)     // [ 100, 40, 25, 10, 5, 1 ] 降序

<span class="myTitle">针对数据中的对象的某个属性进行排序</span>
let myPointsArray =  [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];
// 根据value的数字大小排序
console.log(myPointsArray.sort(((a, b) => { return a.value - b.value })))
// 根据name的字母排序
console.log(myPointsArray.sort((a,b) => {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA &lt; nameB) {
        return -1;
    }
    if (nameA > nameB) { //如果 a 大于 b,位置互换
        return 1;
    }
    // names must be equal
    return 0;
}))

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
