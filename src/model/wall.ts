/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 20:58:06
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 14:00:03
 * @FilePath: /tank/src/model/wall.ts
 * @Description: 砖墙模型
 */
import wall from '../canvas/wall'
import { image } from '../service/images'
import ModelAbstract from './modelAbstract'

export default class extends ModelAbstract {
  canvas: ICanvas = wall
  // 模型名称
  name: string = 'wall'
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
    super.draw()
  }
}
