/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:06:35
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 21:07:54
 * @FilePath: /tank/src/model/water.ts
 * @Description: 水模型
 */

import { image } from '../service/images'
import ModelAbstract from './modelAbstract'

export default class extends ModelAbstract {
  render(): void {
    super.draw(image.get('water')!)
  }
}
