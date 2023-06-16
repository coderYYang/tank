/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-16 20:52:20
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-16 21:39:27
 * @FilePath: /blackboard/src/main.ts
 * @Description:
 */
import './style.css'

class BlackBoard {
  constructor(
    public el = document.querySelector<HTMLCanvasElement>('#canvas')!,
    private app = el.getContext('2d')!,
    private width: number = el.width,
    private height: number = el.height,
    private btns: HTMLDivElement = document.createElement('div'),
    private bgColor = '#000',
    private lineColor = '#fff'
  ) {
    this.initCanvas()
    this.bindEvent()
  }

  /**
   * @description: 初始化画布
   * @return {*}
   */
  private initCanvas(): void {
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.width, this.height)

    this.btns.classList.add('btns')
    // 在目标元素之后插入新的元素
    this.el.insertAdjacentElement('afterend', this.btns)
  }

  /**
   * @description: 绑定化事件
   * @return {*}
   */
  private bindEvent(): void {
    // 绑定画线事件
    const mousemove = this.drawLine.bind(this)

    /**
     * @description: 鼠标按下事件
     * @param {*} mousedown
     * @return {*}
     */
    this.el.addEventListener('mousedown', () => {
      // 开始画线
      this.app.beginPath()
      // 设置线条颜色
      this.app.strokeStyle = this.lineColor
      /**
       * @description: 鼠标移动事件
       * @return {*}
       */
      this.el.addEventListener('mousemove', mousemove)
    })

    /**
     * @description: 鼠标抬起事件
     * @return {*}
     */
    document.addEventListener('mouseup', () => this.el.removeEventListener('mousemove', mousemove))
  }

  /**
   * @description: 画线
   * @param {MouseEvent} event
   * @return {*}
   */
  private drawLine(event: MouseEvent): void {
    this.app.lineTo(event.offsetX, event.offsetY)
    this.app.stroke()
  }

  /**
   * @description: 清屏操作
   * @return {BlackBoard}
   */
  public clear(): BlackBoard {
    const el = document.createElement('button')
    el.innerHTML = '清屏'
    // 在目标元素内部的起始位置插入新的元素
    this.btns.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.app.fillStyle = this.bgColor
      this.app.fillRect(0, 0, this.width, this.height)
    })
    return this
  }

  /**
   * @description: 橡皮
   * @param {Number} width 橡皮宽度
   * @return {BlackBoard}
   */
  public erase(width: number = 5): BlackBoard {
    const el = document.createElement('button')
    el.innerHTML = '橡皮'
    // 在目标元素内部的起始位置插入新的元素
    this.btns.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.lineColor = this.bgColor
      this.app.lineWidth = width
    })
    return this
  }

  /**
   * @description: 写字
   * @return {BlackBoard}
   */
  public draw(): BlackBoard {
    const el = document.createElement('button')
    el.innerHTML = '写字'
    // 在目标元素内部的起始位置插入新的元素
    this.btns.insertAdjacentElement('afterbegin', el)
    el.addEventListener('click', () => {
      this.lineColor = '#fff'
      this.app.lineWidth = 1
    })
    return this
  }

  /**
   * @description: 截图
   * @return {BlackBoard}
   */
  public short(): BlackBoard {
    const el = document.createElement('button')
    el.innerHTML = '截图'
    // 在目标元素内部的起始位置插入新的元素
    this.btns.insertAdjacentElement('afterbegin', el)
    const img = document.createElement('img')
    el.addEventListener('click', () => {
      img.src = this.el.toDataURL('image/jpeg')
      img.classList.add('img-short')
    })
    // 在目标元素之后插入新的元素
    this.btns.insertAdjacentElement('afterend', img)
    return this
  }

  /**
   * @description: 设置黑板颜色
   * @param {string} color
   * @return {BlackBoard} BlackBoard
   */
  public setBgColor(color: string): BlackBoard {
    this.bgColor = color
    this.app.fillStyle = color
    this.app.fillRect(0, 0, this.width, this.height)
    return this
  }

  /**
   * @description: 设置画笔颜色
   * @return {*}
   */
  public setLineColor(): void {
    const colors = ['#1abc9c', '#f1c40f', '#9b59b6', '#ecf0f1']
    const container = document.createElement('div')
    container.classList.add('container')
    colors.forEach((color: string) => {
      const div = document.createElement('div')
      div.style.cssText = `width: 20px; height: 20px; background-color: ${color}`
      container.insertAdjacentElement('afterbegin', div)

      div.addEventListener('click', () => (this.lineColor = color))
    })
    // 在目标元素内部的结束位置插入新的元素
    this.btns.insertAdjacentElement('beforeend', container)
  }
}

const instance = new BlackBoard()
instance.clear().erase().draw().short().setLineColor()
