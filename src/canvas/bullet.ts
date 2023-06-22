/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-18 21:09:08
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:50:45
 * @FilePath: /tank/src/canvas/bullet.ts
 * @Description: 子弹画布
 */

import { default as bullet, default as model } from '../model/bullet'
import { fireStart } from '../service/audio'
import CanvasAbstract from './canvasAbstract'
import play from './play'
import tank from './tank'

export default new (class Bullet extends CanvasAbstract implements ICanvas {
  // 定时器
  interval: number = 0
  num: number = 0
  model: BulletModelContsructor = model

  render(): void {
    this.interval = setInterval(() => {
      this.createBullet()
      this.renderModels()
    }, 50)
  }

  /**
   * @description: 创建子弹
   * @return {*}
   */
  protected createBullet(): void {
    tank.models.forEach((tank) => {
      const isExists = this.models.some((m) => m.tank == tank)
      // 不存在子弹时创建子弹
      if (!isExists) {
        this.models.push(new bullet(tank))
      }
    })
  }

  /**
   * @description: 添加玩家子弹
   * @return {*}
   */
  public addPlayBullet(): void {
    this.models.push(new bullet(play.models[0]))
    fireStart()
  }

  /**
   * @description: 停止渲染
   * @return {*}
   */
  public stop(): void {
    clearInterval(this.interval)
  }
})('bullet')
