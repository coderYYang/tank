/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 10:44:36
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 18:02:56
 * @FilePath: /tank/src/canvas/canvasAbstract.ts
 * @Description: 画布抽象类
 */
import config from '../config'
import position from '../service/position'

export default abstract class CanvasAbstract {
  // 记录当前有多少个元素
  public models: IModel[] = []
  // 渲染方法
  abstract render(): void
  // 模型数量
  abstract num: number
  // 模型
  abstract model: ModelContsructor | BulletModelContsructor

  constructor(
    protected name: string,
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    public cxt = el.getContext('2d')!
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
    this.el.setAttribute('name', this.name)
    this.app.appendChild(this.el)
  }

  /**
   * @description: 生成模型实例
   * @return {*}
   */
  protected createModels(): void {
    position.getCollection(this.num).forEach(({ x, y }) => {
      const instance = new (this.model as ModelContsructor)(x, y)
      this.models.push(instance)
    })
  }

  /**
   * @description: 将模型渲染到画布上
   * @return {*}
   */
  public renderModels(): void {
    this.cxt.clearRect(0, 0, config.canvas.width, config.canvas.height)
    this.models.forEach((model) => model.render())
  }

  /**
   * @description: 移除画布
   * @return {*}
   */
  public removeModels(model: IModel): void {
    this.models = this.models.filter((m) => m !== model)
  }
}
