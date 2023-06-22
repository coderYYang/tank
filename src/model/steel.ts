/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:48:15
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 13:59:35
 * @FilePath: /tank/src/model/steel.ts
 * @Description: 钢墙模型
 */

import steel from '../canvas/steel'
import { image } from '../service/images'
import ModelAbsTract from './modelAbstract'

export default class extends ModelAbsTract {
  canvas: ICanvas = steel
  // 模型名称
  name: string = 'steel'
  image(): HTMLImageElement {
    return image.get('steel')!
  }
  render(): void {
    super.draw()
  }
}
