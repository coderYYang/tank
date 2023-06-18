/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:51:29
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 21:01:46
 * @FilePath: /tank/src/model/straw.ts
 * @Description: 草地模型
 */

import { image } from '../service/images'
import ModelAbstract from './modelAbstract'

export default class Straw extends ModelAbstract {
  render(): void {
    super.draw(image.get('straw')!)
  }
}
