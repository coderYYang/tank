/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:06:35
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 20:28:16
 * @FilePath: /tank/src/model/boss.ts
 * @Description: boss模型
 */

import boss from '../canvas/boss'
import { image } from '../service/images'
import ModelAbstract from './modelAbstract'

export default class extends ModelAbstract {
  canvas: ICanvas = boss
  // 模型名称
  name: string = 'boss'
  image(): HTMLImageElement {
    return image.get('boss')!
  }
  render(): void {
    super.draw()
  }
}
