/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:06:35
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:04:54
 * @FilePath: /tank/src/model/play.ts
 * @Description: 水模型
 */

import _ from 'lodash'
import play from '../canvas/play'
import config from '../config'
import ModelAbstract from './modelAbstract'
import { image } from '../service/images'
import { directionEnum } from '../enum/directionEnum'
import { isCanvasTouch, isModelTouch } from '../utils'
import bullet from '../canvas/bullet'

export default class extends ModelAbstract {
  canvas: ICanvas = play
  // 模型名称
  name: string = 'play'
  // 事件是否绑定
  bindEvent: boolean = false
  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }
  render(): void {
    super.draw()
    if (!this.bindEvent) {
      this.bindEvent = true
      document.addEventListener('keydown', this.changeDirection.bind(this))
      document.addEventListener('keydown', this.move.bind(this))
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.code == 'Space') bullet.addPlayBullet()
      })
    }
  }

  /**
   * @description: 改变方向
   * @return {*}
   */
  protected changeDirection(event: KeyboardEvent): void {
    switch (event.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top
        break
      case 'ArrowDown':
        this.direction = directionEnum.bottom
        break
      case 'ArrowLeft':
        this.direction = directionEnum.left
        break
      case 'ArrowRight':
        this.direction = directionEnum.right
        break
    }
    this.canvas.renderModels()
  }

  /**
   * @description: 移动
   * @return {*}
   */
  protected move(event: KeyboardEvent): void {
    let x = this.x
    let y = this.y
    switch (event.code) {
      case 'ArrowUp':
        y -= 5
        break
      case 'ArrowDown':
        y += 5
        break
      case 'ArrowLeft':
        x -= 5
        break
      case 'ArrowRight':
        x += 5
        break
    }
    // 碰撞检测
    if (isCanvasTouch(x, y) || isModelTouch(x, y)) return

    this.x = x
    this.y = y
    this.canvas.renderModels()
  }
}
