/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:06:35
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:17:36
 * @FilePath: /tank/src/model/bullet.ts
 * @Description: 子弹模型
 */

import boss from '../canvas/boss'
import bullet from '../canvas/bullet'
import play from '../canvas/play'
import steel from '../canvas/steel'
import tank from '../canvas/tank'
import wall from '../canvas/wall'
import config from '../config'
import { directionEnum } from '../enum/directionEnum'
import { image } from '../service/images'
import { isCanvasTouch, isModelTouch } from '../utils'
import ModelAbstract from './modelAbstract'

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = bullet
  // 模型名称
  name: string = 'water'

  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
    this.direction = tank.direction as directionEnum
  }

  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  render(): void {
    let x = this.x
    let y = this.y
    const step = this.tank.name == 'play' ? config.playBulletStep : config.tankBulletStep
    switch (this.direction) {
      case directionEnum.top:
        y -= step
        break
      case directionEnum.right:
        x += step
        break
      case directionEnum.bottom:
        y += step

        break
      case directionEnum.left:
        x -= step
        break
    }
    // 碰撞检测
    const touchModel = isModelTouch(x, y, 2, 2, [
      ...wall.models,
      ...steel.models,
      ...boss.models,
      ...tank.models,
      ...play.models
    ])
    if (isCanvasTouch(x, y, 2, 2)) {
      this.destroy()
    } else if (touchModel && touchModel.name != this.tank.name) {
      this.destroy()
      if (touchModel.name != 'steel') touchModel.destroy()
      this.blast(touchModel)
    } else {
      this.x = x
      this.y = y
      this.draw()
    }
  }

  /**
   * @description: 绘制模型
   * @return {*}
   */
  protected draw(): void {
    this.canvas.cxt.drawImage(this.image(), this.x, this.y, 2, 2)
  }
}
