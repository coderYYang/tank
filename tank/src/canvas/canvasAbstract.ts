/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:44:36
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-18 20:41:41
 * @FilePath: /tank/src/canvas/canvasAbstract.ts
 * @Description: 画布抽象类
 */
import config from '../config'
import position from '../service/position'

export default abstract class CanvasAbstract {
  // 记录当前有多少个元素
  protected models: IModel[] = []
  // 渲染方法
  abstract render(): void

  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }

  /**
   * @description: 创建画布
   * @return {*}
   */
  protected createCanvas(): void {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  /**
   * @description: 生成模型实例
   * @return {*}
   */
  protected createModels(num: number, model: ModelContsructor): void {
    position.getCollection(num).forEach(({ x, y }) => {
      const instance = new model(this.canvas, x, y)
      this.models.push(instance)
    })
  }

  /**
   * @description: 将模型渲染到画布上
   * @return {*}
   */
  protected renderModels(): void {
    this.models.forEach((model) => model.render())
  }
}
