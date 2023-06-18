/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:05:55
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 21:47:02
 * @FilePath: /tank/src/config.ts
 * @Description: 全局配置文件
 */

import straw from './static/images/straw/straw.png'
import steel from './static/images/wall/steels.gif'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'

export default {
  // 画布配置
  canvas: {
    width: 900,
    height: 500
  },
  // 模型配置
  model: {
    width: 30,
    height: 30
  },
  // 草坪数量
  straw: {
    num: 50
  },
  // 砖墙数量
  wall: {
    num: 50
  },
  // 水数量
  water: {
    num: 20
  },
  // 钢墙数量
  steel: {
    num: 20
  },
  // 贴图
  images: {
    straw,
    wall,
    water,
    steel
  }
}
