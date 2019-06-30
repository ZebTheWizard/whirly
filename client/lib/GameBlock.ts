import { GameObject } from "./GameObject";
import { Constructor, KeyMap } from '../Interfaces'
import {Moveable} from './Moveable'
// Moveable.Moveable.call
// Moveable.Moveable


export class GameBlock extends Moveable(GameObject) {

  private $color:string
  private $x:number
  private $y: number
  public ismoveable:boolean
  
  constructor(x:number, y:number, color:string=null) {
    super()
    this.$x = x
    this.$y = y
    this.$color = color
  }

  draw (ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.$color
    ctx.fillRect(this.$x, this.$y, 20,20)
  }

  keypress (keys:KeyMap) {
    if (keys.ArrowLeft) {
      this.$x -= 1
    }
    if (keys.ArrowRight) {
      this.$x += 1
    }
  }
}

// applyMixins(GameBlock, [Moveable])