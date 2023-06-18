/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:45:46
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 22:06:35
 * @FilePath: /tank/src/canvas/steel.ts
 * @Description: 钢墙画布
 */

import config from '../config'
import model from '../model/steel'
import CanvasAbstract from './canvasAbstract'

class Steel extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.steel.num, model)
  }

  render() {
    super.renderModels()
  }
}

export default new Steel()
