/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:45:46
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 14:17:51
 * @FilePath: /tank/src/canvas/steel.ts
 * @Description: 钢墙画布
 */

import config from '../config'
import model from '../model/steel'
import CanvasAbstract from './canvasAbstract'

export default new (class Steel extends CanvasAbstract implements ICanvas {
  num: number = config.steel.num
  model: ModelContsructor = model

  render() {
    super.createModels()
    super.renderModels()
  }
})('steel')
