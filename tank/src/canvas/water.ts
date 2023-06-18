/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:09:08
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 21:11:56
 * @FilePath: /tank/src/canvas/water.ts
 * @Description: 水画布
 */

import config from '../config'
import model from '../model/water'
import CanvasAbstract from './canvasAbstract'

class Water extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.water.num, model)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Water()
