import { GameObject } from "./GameObject";
import { Drawable } from './Drawable'
import { Vector } from "./Vector";


export class GameBlock extends Drawable(GameObject) {

  private $color:string
  public x: number
  public y: number
  public width: number
  public height: number
  
  constructor(x:number, y:number, color:string=null) {
    super()
    this.width = 20
    this.height = 20
    this.canvas.set(new Vector(x,y))
    this.$color = color
  }

  draw (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.$color
    ctx.fillRect(this.position.value('x'), this.position.value('y'), this.width, this.height)
    // ctx.fillStyle = "#000000"
    // ctx.fillRect(this.x + this.width/2, this.y + this.height/2, 2, 2)
  }
}

// applyMixins(GameBlock, [Moveable])