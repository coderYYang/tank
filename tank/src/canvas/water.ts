/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:09:08
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 14:18:17
 * @FilePath: /tank/src/canvas/water.ts
 * @Description: 水画布
 */

import config from '../config'
import model from '../model/water'
import CanvasAbstract from './canvasAbstract'

export default new (class Water extends CanvasAbstract implements ICanvas {
  num: number = config.water.num
  model: ModelContsructor = model

  render(): void {
    super.createModels()
    super.renderModels()
  }
})('water')
