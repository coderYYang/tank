/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-22 11:29:21
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:40:01
 * @FilePath: /tank/src/vite-env.d.ts
 * @Description:
 */
/// <reference types="vite/client" />

interface ModelContsructor {
  new (x: number, y: number): IModel
}

interface BulletModelContsructor {
  new (tank: IModel): IModel
}

interface IModel {
  name: string
  render(): void
  tank?: IModel
  x: number
  y: number
  width: number
  height: number
  direction: string
  image(): HTMLImageElement
  destroy(): void
}

interface ICanvas {
  num: number
  model: ModelContsructor | BulletModelContsructor
  cxt: CanvasRenderingContext2D
  removeModels(model: IModel): void
  renderModels(): void
  stop?(): void
}
