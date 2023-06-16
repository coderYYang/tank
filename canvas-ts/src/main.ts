/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-11 13:47:39
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-16 09:28:29
 * @FilePath: /canvas-ts/src/main.ts
 * @Description: main.ts
 */

const el = document.querySelector<HTMLCanvasElement>('#canvas')!

const app = el.getContext('2d')!

// 矩形
// app.fillStyle = 'red'
// app.fillRect(0, 0, 300, 300)
// app.fillStyle = '#2ecc71'
// app.fillRect(0, 0, 100, 100)

// 线条
// app.strokeStyle = 'red'
// app.lineWidth = 5
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)

// 圆形
// app.fillStyle = '#2ecc71'
// app.arc(100, 100, 50, 0, 2 * Math.PI)
// app.stroke()

// 多边形
// app.beginPath()
// app.moveTo(el.width / 2, 10)
// app.lineTo(el.width, 200)
// app.lineTo(10, 200)
// app.closePath()
// app.strokeStyle = '#2ecc71'
// app.lineWidth = 5
// app.stroke()

// 颜色渐变
// const gradient = app.createLinearGradient(0, 0, 300, 300)
// gradient.addColorStop(0, '#16a085')
// gradient.addColorStop(0.5, '#e74c3c')
// gradient.addColorStop(1, '#e67e22')
// app.fillStyle = gradient
// app.fillRect(0, 0, 300, 300)
// app.strokeStyle = gradient
// app.lineWidth = 50
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)

// 文字
// app.fillStyle = '#34495e'
// app.fillRect(0, 0, el.width, el.height)
// app.font = '60px STBaoliSC-Regular'
// app.textBaseline = 'bottom'
// app.fillStyle = '#fff'
// app.fillText('杨杨', 50, 50)
// app.strokeStyle = '#fff'
// app.strokeText('杨杨', 50, 50)

// 创建图片 不能控制大小
// const img = document.createElement('img')
// img.src = new URL('./assets/images/1.jpg', import.meta.url).href
// img.onload = () => {
//   const pattern = app.createPattern(img, 'repeat')!
//   app.fillStyle = pattern
//   app.fillRect(0, 0, 300, 300)
// }

// 创建图片 能控制大小
// app.fillStyle = '#34495e'
// app.fillRect(0, 0, el.width, el.height)
// const img = document.createElement('img')
// img.src = new URL('./assets/images/1.jpg', import.meta.url).href
// img.onload = () => {
//   el.width = img.naturalWidth * scale(img, el)
//   el.height = img.naturalHeight * scale(img, el)
//   app.drawImage(img, 0, 0, el.width, el.height)
//   // app.drawImage(img, 0, 50, 100, 100)
// }

/**
 * @description: 缩略图效果
 * @return {*}
 */
// function scale(img: HTMLImageElement, el: HTMLCanvasElement): number {
//   // 图片原始尺寸 naturalWidth naturalHeight
//   // 返回数字中的最小值
//   return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight)
// }

// 绘制随机色块
app.fillStyle = '#34495e'
app.fillRect(0, 0, el.width, el.height)

// 绘制方块
// for (let i = 0; i < 1000; i++) {
//   app.fillStyle = '#fff'
//   app.fillRect(Math.random() * el.width, Math.random() * el.height, 2, 2)
// }

// 绘制圆
for (let i = 0; i < 20; i++) {
  app.beginPath()
  app.fillStyle = ['#1abc9c', '#e74c3c', '#d35400', '#9b59b6', '#f1c40f', '#3498db'].sort(() =>
    Math.floor(Math.random() * 3) ? 1 : -1
  )[0]
  app.arc(Math.random() * el.width, Math.random() * el.height, 5 + Math.random() * 10, 0, 2 * Math.PI)
  app.fill()
}
