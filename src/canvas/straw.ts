/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:20:44
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 14:17:56
 * @FilePath: /tank/src/canvas/straw.ts
 * @Description: 草地画布
 */

import config from '../config'
import model from '../model/straw'
import CanvasAbstract from './canvasAbstract'

export default new (class Straw extends CanvasAbstract implements ICanvas {
  num: number = config.straw.num
  model: ModelContsructor = model

  render(): void {
    super.createModels()
    super.renderModels()
  }
})('straw')
