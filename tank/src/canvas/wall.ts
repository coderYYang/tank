/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 20:49:01
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 20:59:34
 * @FilePath: /tank/src/canvas/wall.ts
 * @Description: 砖墙画布
 */

import config from '../config'
import model from '../model/wall'
import CanvasAbstract from './canvasAbstract'

class Wall extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.wall.num, model)
  }

  render(): void {
    super.renderModels()
  }
}

export default new Wall()
