/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:09:08
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 20:31:18
 * @FilePath: /tank/src/canvas/boss.ts
 * @Description: boss画布
 */

import config from '../config'
import model from '../model/boss'
import CanvasAbstract from './canvasAbstract'

export default new (class Boss extends CanvasAbstract implements ICanvas {
  num: number = 0
  model: ModelContsructor = model

  render(): void {
    this.createModels()
    this.renderModels()
  }

  /**
   * @description: 生成模型实例
   * @return {*}
   */
  protected createModels(): void {
    ;[{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(({ x, y }) => {
      const instance = new (this.model as ModelContsructor)(x, y)
      this.models.push(instance)
    })
  }
})('boss')
