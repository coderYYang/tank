/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:41:54
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:40:44
 * @FilePath: /tank/src/canvas/tank.ts
 * @Description: 坦克画布
 */
import config from '../config'
import model from '../model/tank'
import position from '../service/position'
import CanvasAbstract from './canvasAbstract'

export default new (class Tank extends CanvasAbstract implements ICanvas {
  // 定时器
  interval: number = 0
  num: number = config.tank.num
  model: ModelContsructor = model

  render(): void {
    this.createModels()
    this.renderModels()

    this.interval = setInterval(() => this.renderModels(), config.timeout)
  }

  /**
   * @description: 将模型渲染到画布上
   * @return {*}
   */
  public renderModels(): void {
    this.cxt.clearRect(0, 0, config.canvas.width, config.canvas.height)
    super.renderModels()
  }

  /**
   * @description: 生成模型实例
   * @return {*}
   */
  protected createModels(): void {
    for (let i = 0; i < this.num; i++) {
      const { x } = position.position()
      const instance = new this.model(x, 0)
      this.models.push(instance)
    }
  }

  /**
   * @description: 停止渲染
   * @return {*}
   */
  public stop(): void {
    clearInterval(this.interval)
  }
})('tank')
