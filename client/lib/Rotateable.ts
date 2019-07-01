import {Constructor} from '../Interfaces'
import { GameBlock } from './GameBlock'
import { createContext } from 'react';


// export function Rotateable (Base: Constructor<GameBlock>) {
export function Rotateable<T extends Constructor<GameBlock>>(Base:T) {

  abstract class RotateableTrait extends Base {
    public isRotateable:boolean
    // public rotation:number

    constructor (...args:any[]) {
      super(...args)
      this.isRotateable = true
    }

    public rotate(radians:number) {
      this.rotation += radians
      // this.world.ctx.save()
      // this.world.ctx.rotate(degrees * Math.PI / 180)
      // this.draw(this.world.ctx)
      // this.world.ctx.restore()
    }
  }



  return RotateableTrait;
};

// export class Rotateable {
  // private $keys: KeyMap
  // public constructor () {
    // super()
    // this.$keys = {}
    // window.addEventListener('keydown', this.$keydown.bind(this))
    // window.addEventListener('keyup', this.$keyup.bind(this))
  // }

  // private $keydown (e:KeyboardEvent) {
  //   this.$keys[e.key] = true
  // }

  // private $keyup (e:KeyboardEvent) {
  //   this.$keys[e.key] = false
  // }

  // protected key(...keys:string[]) {
  //   var allmatch:boolean = true
  //   keys.forEach((k:string) => {
  //     if (typeof this.$keys[k] === "undefined" || this.$keys[k] === false) {
  //       allmatch = false
  //     }
  //   })
  //   return allmatch
  // }
  // public abstract draw():void
// }