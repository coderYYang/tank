/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-22 22:20:43
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:59:22
 * @FilePath: /tank/src/app.ts
 * @Description: app.ts
 */

import boss from './canvas/boss'
import bullet from './canvas/bullet'
import play from './canvas/play'
import steel from './canvas/steel'
import straw from './canvas/straw'
import tank from './canvas/tank'
import wall from './canvas/wall'
import water from './canvas/water'
import config from './config'
import { audioStart } from './service/audio'
import { promises } from './service/images'
import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

// 是否开始
let isStart = false
// 游戏状态 0: 失败 1: 胜利 2: 进行中
let state = 2
// 定时器
let interval = 0

/**
 * @description: 游戏初始化
 * @return {*}
 */
export function bootstrap(): void {
  app.addEventListener('click', async () => {
    await start()
    interval = setInterval(() => {
      if (!tank.models.length) state = 1
      if (!play.models.length || !boss.models.length) state = 0
      if (state != 2) stop()
    }, 100)
  })
  // 判断是否输赢
}

/**
 * @description: 游戏开始，加载贴图
 * @return {*}
 */
export async function start(): Promise<void> {
  if (isStart) return
  audioStart()
  isStart = true
  app.style.backgroundImage = 'none'
  await Promise.all(promises)
  straw.render()
  wall.render()
  water.render()
  steel.render()
  tank.render()
  bullet.render()
  boss.render()
  play.render()
}

/**
 * @description: 游戏结束
 * @return {*}
 */
export function stop(): void {
  clearInterval(interval)
  tank.stop()
  bullet.stop()
  stopText()
}

/**
 * @description: 游戏结束文字
 * @return {*}
 */
export function stopText(): void {
  const el = document.createElement('canvas')
  el.width = config.canvas.width
  el.height = config.canvas.height
  const ctx = el.getContext('2d')!
  ctx.fillStyle = 'red'
  ctx.font = 'bold 50px Arial'
  ctx.textBaseline = 'top'
  ctx.textAlign = 'center'
  const stateText = state == 1 ? '恭喜你获得胜利！！！' : '失败了，再来一次吧'
  ctx.fillText(stateText, config.canvas.width / 2, config.canvas.height / 2)
  app.appendChild(el)
}
