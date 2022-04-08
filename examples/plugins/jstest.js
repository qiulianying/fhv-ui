// 这里用于测试js的各种性能以及写法
// https://editor.mdnice.com/?outId=ab1472f4c1a9403aa312ccb867a90b63  文档编写 可以查看详细说明

// 有关跳出循环 return break continue
/*
* return：语句会终止函数的执行并返回函数的值，会终止当前这一块函数的后续所有操作
* break：跳出代码块, 所以 break 可以使用于循环和 switch 等，代码块：{}
* continue：进行下一个迭代，所以continue只能用于循环的代码块
* */
// return
function testReturn() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) return
        console.log("a this number is " + i)
    }
}
// break
function testBreak() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) break
        console.log("b this number is " + i)
    }
}
// continue
function testContinue() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) continue // 进行下一个迭代了
        console.log("c this number is " + i)
    }
}
testReturn()
testBreak()
testContinue()



