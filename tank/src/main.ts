/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:02:26
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 22:03:30
 * @FilePath: /tank/src/main.ts
 * @Description: 入口文件
 */
import steel from './canvas/steel'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import config from './config'
import { promises } from './service/images'
import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

/**
 * @description: 加载贴图
 * @return {*}
 */
async function bootstrap(): Promise<void> {
  await Promise.all(promises)
  straw.render()
  wall.render()
  water.render()
  steel.render()
}

void bootstrap()
