/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:06:35
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 14:00:14
 * @FilePath: /tank/src/model/water.ts
 * @Description: 水模型
 */

import water from '../canvas/water'
import { image } from '../service/images'
import ModelAbstract from './modelAbstract'

export default class extends ModelAbstract {
  canvas: ICanvas = water
  // 模型名称
  name: string = 'water'
  image(): HTMLImageElement {
    return image.get('water')!
  }
  render(): void {
    super.draw()
  }
}
