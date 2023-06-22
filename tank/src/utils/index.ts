/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-22 15:21:28
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 21:31:33
 * @FilePath: /tank/src/utils/index.ts
 * @Description: 工具函数
 */

import boss from '../canvas/boss'
import steel from '../canvas/steel'
import wall from '../canvas/wall'
import config from '../config'

/**
 * @description: 检测画布是否碰撞
 * @param {number} x 子弹的x坐标
 * @param {number} y 子弹的y坐标
 * @param {number} width 子弹的宽度
 * @param {number} height 子弹的高度
 * @return {boolean}
 */
export function isCanvasTouch(
  x: number,
  y: number,
  width: number = config.model.width,
  height: number = config.model.height
): boolean {
  if (x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height) return true
  return false
}

/**
 * @description: 检测模型是否碰撞
 * @param {number} x 模型的x坐标
 * @param {number} y 模型的y坐标
 * @param {number} width 模型的宽度
 * @param {number} height 模型的高度
 * @param {IModel[]} models 检测需要碰撞模型数组
 * @return {boolean}
 */
export function isModelTouch(
  x: number,
  y: number,
  width: number = config.model.width,
  height: number = config.model.height,
  models: IModel[] = [...wall.models, ...steel.models, ...boss.models]
): IModel | undefined {
  return models.find((model) => {
    const state =
      x + width <= model.x || x >= model.x + model.width || y + height <= model.y || y >= model.y + model.height
    return !state
  })
}
