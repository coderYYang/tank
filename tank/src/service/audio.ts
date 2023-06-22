/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-22 22:44:30
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-22 22:52:21
 * @FilePath: /tank/src/service/audio.ts
 * @Description: 控制游戏声音
 */

/**
 * @description:
 * @return {*}
 */
export function getElenemt(id: string): HTMLAudioElement {
  return document.querySelector<HTMLAudioElement>(id)!
}

/**
 * @description: 游戏开始声音
 * @return {*}
 */
export function audioStart(): void {
  getElenemt('#start').play()
}

/**
 * @description: 子弹发射声音
 * @return {*}
 */
export function fireStart(): void {
  getElenemt('#fire').play()
}

/**
 * @description: 爆炸声音
 * @return {*}
 */
export function blastStart(): void {
  getElenemt('#blast').play()
}
