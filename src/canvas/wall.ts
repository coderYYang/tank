/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 20:49:01
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:07:07
 * @FilePath: /tank/src/canvas/wall.ts
 * @Description: 砖墙画布
 */

import config from '../config'
import model from '../model/wall'
import CanvasAbstract from './canvasAbstract'

export default new (class Wall extends CanvasAbstract implements ICanvas {
  num: number = config.wall.num
  model: ModelContsructor = model

  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }

  /**
   * @description: 绘制boss墙
   * @return {*}
   */
  protected createBossWall(): void {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    const pos = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh }
    ]
    pos.forEach(({ x, y }) => {
      const instance = new (this.model as ModelContsructor)(x, y)
      this.models.push(instance)
    })
  }
})('wall')
