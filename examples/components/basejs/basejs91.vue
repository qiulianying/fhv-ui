<template>
    <div class="content-box">
        <h2 class="demo-title">js异步深究</h2>
        <div class="allChange">
            <div class="zfx"></div>
            <div class="sanjiaoleft"></div>
            <div class="sanjiaoright"></div>
            <div class="query"></div>
        </div>
        <div style="line-height: 30px">
            <p>异步：js一般来说都是顺序执行，某些情况下，我们必须要争某一块代码必须执行完成之后，再去执行后续的，这就涉及到异步处理，在接口处理或者某些大量计算中非常的常见</p>
            <p>
                你经常会遇到两种异步编程风格：<span style="color: red">老派callbacks(不推荐这种，回调函数可读性太差，容易把人看傻)，新派promise</span>。下面就来分别介绍。
            </p>
            <p>
                目前异步主要通过这几种方式处理
                回调函数 <br>
                事件监听<br>
                发布/订阅<br>
                Promise 对象<br>
                async 函数是什么？一句话，它就是 Generator 函数的语法糖。
            </p>
        </div>

        <pre class="mypre">
// 对于callbacks写法，主要就是创建一个对应的callbacks回调函数进去，然后确保执行成功之后再回调出来执行
// 例如这里需要保证获取到图片之后，再创建图片元素(如果没接口获取到图片就创建了会报错)
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;
  xhr.onload = function() {
    // 用于执行外面传入的函数，在确保获取到内容之后进行回调
    callback(xhr.response);
  };
  xhr.send();
}
// 这里编写一个回调函数
function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}
// 将回调函数放入到参数中进行
loadAsset('coffee.jpg', 'blob', displayImage);


这里在见识了上面日了狗的callback写法之后，使用promise就相对好看多了，如下
// Promise 新建后就会立即执行，当然这里也可以进行简写，这里可以通过修改ax的值进行测试
<span style="color: red">// 所以这里我们也可以看出，实际上promise函数是同步执行的，后面的then方法本身是同步执行是</span>
const mypromise = new Promise((resolve, reject) => {
    let ax = 1
    if (ax > 0) {
        resolve(ax)   // 异步操作成功
        console.log(ax)
    } else {
        reject('报错')    // 异步操作失败
    }
})
console.log(34234234)
mypromise.then(res => {
    console.log('回调成功' + res)    // 调用成功 1
}).catch(error => {
    console.log(error)  // 调用失败 报错
}).finally(() => {
    console.log('finally') // 如论结果如何最后都会调用
});
new Promise(resolve => {resolve('输出')}).then(res => {console.log(res)})

// 在实际项目中，我们也经常用promise进行接口封装来进行统一调用，这在uni中非常常见，例如简单案例
const http = (url) => {
    return new Promise((resolve, reject) => {
        const handle = () => {
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText));
            }
        }
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handle
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()
    })
}

// 如果存在多个异步，可以通过promise.all执行多个异步确保都成功了再进行输出
let p1 = new Promise((resolve) => {resolve(1)})
let p2 = new Promise((resolve) => {resolve(2)})
Promise.all([p1,p2]).then(res => {
    console.log(res)
})

//


// async函数后面主要其实就是Generator函数语法糖,async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
// async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。
const readFile = (number) => {
    return new Promise(function (resolve) {
        resolve(number)
    })
}
let myInfo = async function () {
    const f1 = await readFile(1)
    const f2 = await readFile(1)
    return f1 + f2
}
myInfo().then((res) => {console.log(res)})
        </pre>
        <div>
            <p>
                <a href="https://es6.ruanyifeng.com/#docs/promise" target="_blank">参考文献1</a>
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
            border-left: 20px solid ;
            border-right: 20px solid;
        }

        .sanjiaoleft {
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            border-left: 20px solid ;
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
