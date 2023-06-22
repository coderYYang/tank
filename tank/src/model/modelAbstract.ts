/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 19:29:13
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:52:49
 * @FilePath: /tank/src/model/modelAbstract.ts
 * @Description: 模型抽象类
 */

import config from '../config'
import { directionEnum } from '../enum/directionEnum'
import { blastStart } from '../service/audio'

export default abstract class ModelAbsTract implements IModel {
  // 模型名称
  abstract name: string
  // 画布
  abstract canvas: ICanvas
  // 坦克方向
  public direction: directionEnum = directionEnum.top
  // 生成模型
  public abstract image(): HTMLImageElement
  // 模型宽度
  public width: number = config.model.width
  // 模型高度
  public height: number = config.model.height
  // 渲染方法
  abstract render(): void
  constructor(public x: number, public y: number) {
    this.randomDireaction()
  }

  /**
   * @description: 生成随机方向
   * @return {*}
   */
  protected randomDireaction(): void {
    this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
  }

  /**
   * @description: 绘制模型
   * @return {*}
   */
  protected draw(): void {
    this.canvas.cxt.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height)
  }

  /**
   * @description: 移除模型
   * @return {*}
   */
  public destroy(): void {
    this.canvas.removeModels(this)
    this.canvas.renderModels()
  }

  /**
   * @description: 爆炸效果
   * @return {*}
   */
  protected blast(model: IModel): void {
    blastStart()
    Array(...Array(8).keys()).reduce((promise, index) => {
      setTimeout(() => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = `/src/static/images/blasts/blast${index}.gif`
          img.onload = () => {
            this.canvas.cxt.drawImage(img, model.x, model.y, model.width, model.height)
            resolve(promise)
          }
        })
      }, 100)
    }, Promise.resolve())
  }
}
