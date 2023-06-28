// 对应画布
let canvas, ctx, loopfun;
let w = 600
let h = 300
let balls = []  // 小球的存放


// 创建球模型构造函数
class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;         // 球x轴坐标
        this.y = y;         // 球y轴坐标
        this.velX = velX;   // 球x轴方向速度
        this.velY = velY;   // 球y轴方向速度
        this.color = color; // 球的颜色
        this.size = size;   // 球的半径大小
    }

    // 画出球的方法
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color;
        // 画出圆形
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // 更新对应球的小球的移动以及位置
    update() {
        if (this.x + this.size > w) {
            this.velX = -(this.velX)
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= h) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX
        this.y += this.velY
    }

    // 碰撞检测，从而小球会知道他们正在撞击其他的球
    collisionDetect() {
        // 要知道小球撞击情况，就要获取到所有的球
        for (let j = 0; j < balls.length; j++) {
            // 检查遍历的小球是否是当前的小球，因为自己球是不可能撞击自己的
            if (this !== balls[j]) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = randomColor()
                }
            }
        }
    }
}


// 创建画布模型
class CanvasProject {
    constructor({width, height}) {
        this.width = width || w;
        this.height = height || h;
    }

    // 画布初始化
    initcanvas() {
        this.initDom()
    }

    initDom() {
        canvas = document.getElementById('canvasshow');
        ctx = canvas.getContext('2d');
        // 设置画布宽高
        w = canvas.width = this.width
        h = canvas.height = this.height

        // 首先清空之前的动画效果
        stopLoop()

        // 创建小球数组集合
        this.drawballArray()
    }

    // 创建对应数量的小球
    drawballArray() {
        while (balls.length < 25) {
            let size = random(10, 20)
            // 创建一个数组集合的球object
            let ball = new Ball(
                // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
                random(0 + size, w - size),
                random(0 + size, h - size),
                random(-7, 7),
                random(-7, 7),
                randomColor(),
                size
            )
            balls.push(ball)
        }
        loop()
    }


}

// 生成一个 min 至 max 之间的随机整数，不包括max
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 生成随机颜色
const randomColor = () => {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
}

// 停止画布动画
const stopLoop = () => {
    cancelAnimationFrame(loopfun)
}

// 画布圆环动画方法
const loop = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw()
        balls[i].update()
        balls[i].collisionDetect(CanvasProject)
    }

    loopfun = requestAnimationFrame(loop)
}

export {CanvasProject, stopLoop}
