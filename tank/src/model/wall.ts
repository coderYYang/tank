/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 20:58:06
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 21:01:36
 * @FilePath: /tank/src/model/wall.ts
 * @Description: 砖墙模型
 */
import { image } from '../service/images'
import ModelAbstract from './modelAbstract'

export default class extends ModelAbstract {
  render(): void {
    super.draw(image.get('wall')!)
  }
}
