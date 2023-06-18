/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:20:44
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 20:41:09
 * @FilePath: /tank/src/canvas/straw.ts
 * @Description: 草地画布
 */

import config from '../config'
import model from '../model/straw'
import CanvasAbstract from './canvasAbstract'

class Straw extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, model)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Straw()
