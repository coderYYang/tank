/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:09:08
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 21:42:38
 * @FilePath: /tank/src/canvas/play.ts
 * @Description: 水画布
 */

import config from '../config'
import model from '../model/play'
import CanvasAbstract from './canvasAbstract'

export default new (class Play extends CanvasAbstract implements ICanvas {
  num: number = 0
  model: ModelContsructor = model

  render(): void {
    this.createModels()
    super.renderModels()
  }

  /**
   * @description: 生成模型实例
   * @return {*}
   */
  protected createModels(): void {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    ;[{ x: cw / 2 + mw * 3, y: ch - mh }].forEach(({ x, y }) => {
      const instance = new (this.model as ModelContsructor)(x, y)
      this.models.push(instance)
    })
  }
})('play')
