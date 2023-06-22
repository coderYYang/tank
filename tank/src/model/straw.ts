/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:51:29
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 13:58:55
 * @FilePath: /tank/src/model/straw.ts
 * @Description: 草地模型
 */

import straw from '../canvas/straw'
import { image } from '../service/images'
import ModelAbstract from './modelAbstract'
export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = straw
  // 模型名称
  name: string = 'straw'
  image(): HTMLImageElement {
    return image.get('straw')!
  }
  render(): void {
    super.draw()
  }
}
