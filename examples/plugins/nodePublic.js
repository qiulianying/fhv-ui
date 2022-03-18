// 这里用于写入全局需要执行的node.js方法
// 这里其实我们忽略了个地方，fs是作为node.js的相关方法，在项目本地启动各方面是可以运行的，但是在实际上浏览器里面是获取不到fs的
const fs = require('fs')
function test() {
    fs.readFile('examples/plugins/util.js', (error, data) => {
        if (error) {
            return console.log(error)
        }
        let getJson = data.toString()
        console.log(getJson)
    })
}
test()
