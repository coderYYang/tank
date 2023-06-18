/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:48:15
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 22:03:02
 * @FilePath: /tank/src/model/steel.ts
 * @Description: 钢墙模型
 */

import { image } from '../service/images'
import ModelAbsTract from './modelAbstract'

export default class extends ModelAbsTract {
  render(): void {
    super.draw(image.get('steel')!)
  }
}
