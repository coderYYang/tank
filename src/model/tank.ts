/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-19 21:18:59
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 20:01:11
 * @FilePath: /tank/src/model/tank.ts
 * @Description: 坦克模型
 */
import _ from 'lodash'
import tank from '../canvas/tank'
import config from '../config'
import { directionEnum } from '../enum/directionEnum'
import { image } from '../service/images'
import { isCanvasTouch, isModelTouch } from '../utils'
import ModelAbsTract from './modelAbstract'

export default class extends ModelAbsTract {
  canvas: ICanvas = tank
  // 模型名称
  name: string = 'tank'
  /**
   * @description: 生成坦克模型
   * @return {HTMLImageElement}
   */
  image(): HTMLImageElement {
    const direction = this.name + _.upperFirst(this.direction)
    return image.get(direction as keyof typeof config.images)!
  }

  render(): void {
    this.move()
    // 增加向下移动概率
    if (Math.floor(Math.random() * 20) == 1) this.direction = directionEnum.bottom
  }

  /**
   * @description: 移动坦克
   * @return {*}
   */
  protected move(): void {
    while (true) {
      let x = this.x
      let y = this.y
      switch (this.direction) {
        case directionEnum.top:
          y--
          break
        case directionEnum.right:
          x++
          break
        case directionEnum.bottom:
          y++
          break
        case directionEnum.left:
          x--
          break
      }

      if (isModelTouch(x, y) || isCanvasTouch(x, y)) {
        this.randomDireaction()
      } else {
        this.x = x
        this.y = y
        break
      }
    }
    super.draw()
  }
}
