import { GameBlock } from "./GameBlock";
import { Constructor, KeyMap } from '../Interfaces'
import { Moveable } from './Moveable'
import { Rotateable } from './Rotateable'
import { Vector } from "./Vector";

export class Player extends Moveable(Rotateable(GameBlock)) {

  constructor(x:number, y:number, color:string=null) {
    super(x, y, color)
    this.height = 40
  }

  update () {
    if (this.world.rotationMode == "keyboard") {
      if (this.keys.ArrowLeft) {
        this.rotate(2 * Math.PI/180)
      }
      if (this.keys.ArrowRight) {
        this.rotate(-2 * Math.PI/180)
      }
    } else {
      this.rotation = 0
      this.rotate(this.center.angleBetween(this.world.mouse))
    }
    
    if (this.keys.ArrowUp) {
      this.addForce(new Vector(0, -1))
    }
    if (this.keys.ArrowDown) {
      this.addForce(new Vector(0, 1))
    }
  }

  draw (ctx:CanvasRenderingContext2D) {
    ctx.fillStyle = '#ff0000'
    ctx.fillRect(this.position.value('x'), this.position.value('y'), this.width, this.height)
    ctx.fillStyle = '#000000'
    ctx.fillRect(this.position.value('x'), this.position.value('y'), this.width, 3)
  }
}

// applyMixins(GameBlock, [Moveable])