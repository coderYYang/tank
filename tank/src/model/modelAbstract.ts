/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 19:29:13
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 21:01:10
 * @FilePath: /tank/src/model/ModelAbstract.ts
 * @Description: 模型抽象类
 */

import config from '../config'

export default abstract class ModelAbsTract implements IModel {
  // 渲染方法
  abstract render(): void
  constructor(protected canvas: CanvasRenderingContext2D, protected x: number, protected y: number) {
    // this.canvas.drawImage(image.get('straw')!, x, y, config.model.width, config.model.height)
  }

  /**
   * @description: 绘制模型
   * @return {*}
   */
  protected draw(img: HTMLImageElement): void {
    this.canvas.drawImage(img, this.x, this.y, config.model.width, config.model.height)
  }
}
