/// <reference types="vite/client" />

interface ModelContsructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel
}

interface IModel {
  render(): void
}
