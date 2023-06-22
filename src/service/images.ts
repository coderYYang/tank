/*
 * @Author: yy 691335336@qq.com
 * @Date: 2023-06-17 13:14:01
 * @LastEditors: yy 691335336@qq.com
 * @LastEditTime: 2023-06-17 15:04:08
 * @FilePath: /tank/src/service/images.ts
 * @Description:
 */
import config from '../config'

// map 的 key
type mapKey = keyof typeof config.images

// 所有贴图
export const image = new Map<mapKey, HTMLImageElement>()

/**
 * @description: 获取图片
 * @param {*} Object
 * @return {*}
 */
export const promises = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = document.createElement('img')
    img.src = value
    img.onload = () => {
      image.set(key as mapKey, img)
      resolve(img)
    }
  })
})
