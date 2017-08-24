
class Options {

  constructor(opt = {}){
    this.zIndex  = opt.zIndex  || -1
    this.opacity = opt.opacity || 0.5
    this.color   = opt.color   || '#4295b9'
    this.count   = opt.count   || 199
    this.sign = new Date()
  }
}

/**
 * @function
 * @param {Options} options 参数对象
 */
export default function (options = new Options()) {
  function getByTagname (name) {
    return document.getElementsByTagName(name)
  }

  function getConfigOption () {
    const opt = new Options(options)
    return {
      l: opt.sign.toString(), // 长度，用于生成id用
      z: opt.zIndex,          // z-index
      o: opt.opacity,         // opacity
      c: opt.color,           // color
      n: opt.count            // count
    }
  }

  // 设置canvas的高宽
  function setCanvasSize () {
    canvasWidth  = theCanvas.width  = document.documentElement.clientWidth  || document.body.clientWidth
    canvasHeight = theCanvas.height = document.documentElement.clientHeight  || document.body.clientHeight
  }

  // 绘制过程
  function drawCanvas () {
    context.clearRect(0, 0, canvasWidth, canvasHeight)
    // 随机的线条和当前位置联合数组
    let [e, i, d, xDist, yDist, dist] = [] // 临时节点

    // 遍历处理每一个点
    randomPoints.forEach(function (r, idx) {
      r.x  += r.xa
      r.y  += r.ya // 移动
      r.xa *= r.x > canvasWidth  || r.x < 0 ? -1 : 1
      r.ya *= r.y > canvasHeight || r.y < 0 ? -1 : 1  // 碰到边界，反向反弹
      context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1)    // 绘制一个宽高为1的点
      // 从下一个点开始
      for (i = idx + 1; i < allArray.length; i++) {
        e = allArray[i]
        // 当前点存在
        if (e.x !== null && e.y !== null) {
          xDist = r.x - e.x // x轴距离 l
          yDist = r.y - e.y // y轴距离 n
          dist  = xDist * xDist + yDist * yDist // 总距离, m
          dist < e.max && (e === currentPoint && dist >= e.max / 2 && (r.x -= 0.03 * xDist, r.y -= 0.03 * yDist), // 靠近的时候加速
            d = (e.max - dist) / e.max,
            context.beginPath(),
            context.lineWidth = d * 4, /* rd > 0.5 ? (d * 1.5) : (d /1.5) */
            context.strokeStyle = `${config.c}`,
            context.moveTo(r.x, r.y),
            context.lineTo(e.x, e.y),

            context.stroke())
        }
      }
    })
    frameFun(drawCanvas)
  }
  // 创建画布，并添加到body中
  var theCanvas = document.createElement('canvas') // 画布
  var config    = getConfigOption()                // 配置
  var canvasId  = 'c_n' + config.l                 // canvas id
  var context   = theCanvas.getContext('2d')
  var canvasWidth
  var canvasHeight
  var frameFun = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (func) {
    window.setTimeout(func, 1000 / 45)
  }
  var random       = Math.random
  var currentPoint = {
    x: null, // 当前鼠标x
    y: null, // 当前鼠标y
    max: 20000// 圈半径的平方
  }
  var allArray
  theCanvas.id            = canvasId
  theCanvas.style.cssText = `position: fixed; top: 0; left: 0; z-index: ${config.z}; opacity: ${config.o}`
  getByTagname('body')[0].appendChild(theCanvas)

  // 初始化画布大小
  setCanvasSize()
  window.onresize    = setCanvasSize
  // 当时鼠标位置存储，离开的时候，释放当前位置信息
  window.onmousemove = function (e) {
    e              = e || window.event
    currentPoint.x = e.clientX
    currentPoint.y = e.clientY
  }
  window.onmouseout = function () {
    currentPoint.x = null
    currentPoint.y = null
  }
  // 随机生成config.n条线位置信息
  for (var randomPoints = [], i = 0; config.n > i; i++) {
    var x  = random() * canvasWidth // 随机位置

    var y  = random() * canvasHeight

    var xa = 2 * random() - 1 // 随机运动方向
    var ya = 2 * random() - 1
    // 随机点
    randomPoints.push({
      x,
      y,
      xa,
      ya,
      max: 6000// 沾附距离
    })
  }
  allArray = randomPoints.concat([currentPoint])

  // 0.1秒后绘制
  setTimeout(function () {
    drawCanvas()
  }, 100)
}
