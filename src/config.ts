/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:05:55
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:11:19
 * @FilePath: /tank/src/config.ts
 * @Description: 全局配置文件
 */

import boss from './static/images/boss/boss.png'
import bullet from './static/images/bullet/bullet.jpg'
import straw from './static/images/straw/straw.png'
import tankBottom from './static/images/tank/bottom.gif'
import tankLeft from './static/images/tank/left.gif'
import tankRight from './static/images/tank/right.gif'
import tankTop from './static/images/tank/top.gif'
import steel from './static/images/wall/steels.gif'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'

import playBottom from './static/images/player/bottom.gif'
import playLeft from './static/images/player/left.gif'
import playRight from './static/images/player/right.gif'
import playTop from './static/images/player/top.gif'

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
    num: 150
  },
  // 砖墙数量
  wall: {
    num: 80
  },
  // 水数量
  water: {
    num: 20
  },
  // 钢墙数量
  steel: {
    num: 10
  },
  // 坦克数量
  tank: {
    num: 10
  },
  // 贴图
  images: {
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft,
    bullet,
    boss,
    playTop,
    playRight,
    playBottom,
    playLeft
  },
  // 坦克移动速度
  timeout: 50,
  // 坦克子弹移动速度
  tankBulletStep: 2,
  // 玩家子弹移动速度
  playBulletStep: 5
}
