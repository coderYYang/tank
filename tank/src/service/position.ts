/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 11:50:47
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 20:33:14
 * @FilePath: /tank/src/service/position.ts
 * @Description: 位置服务
 */
import config from '../config'
import type { PositionType } from '../types'

class Position {
  // 位置信息
  collection: PositionType[] = []

  /**
   * @description: 批量生成唯一坐标，防止重复
   * @return {PositionType[]}
   */
  public getCollection(num: number): PositionType[] {
    const collection = [] as PositionType[]
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position()
        const exists = this.collection.some(({ x, y }) => x == position.x && y == position.y)
        if (!exists) {
          collection.push(position)
          this.collection.push(position)
          break
        }
      }
    }
    return collection
  }

  /**
   * @description: 随机位置
   * @return {PositionType}
   */
  protected position(): PositionType {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y:
        Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height +
        config.model.height * 2
    }
  }
}

export default new Position()
