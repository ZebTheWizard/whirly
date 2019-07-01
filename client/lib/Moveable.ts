import {KeyMap, Constructor} from '../Interfaces'
import { GameBlock } from './GameBlock';
import { Drawable } from './Drawable'
import { Vector } from './Vector'

// export function Moveable (Base: Constructor<GameBlock>) {
export function Moveable<T extends Constructor<GameBlock>>(Base:T) {

  abstract class MoveableTrait extends Base {
    public isMoveable:boolean
    protected keys:KeyMap

    constructor (...args:any[]) {
      super(...args)
      this.isMoveable = true
      this.keys = {}
      window.addEventListener('keydown', this.$keydown.bind(this))
      window.addEventListener('keyup', this.$keyup.bind(this))
    }

    private $keydown (e:KeyboardEvent) {
      this.keys[e.code] = true
    }

    private $keyup (e:KeyboardEvent) {
      this.keys[e.code] = false
    }

    public addForce(force:Vector) {
      force.rotate(this.rotation)
      this.canvas.add(force)
    }
  }



  return MoveableTrait;
};

// export class Moveable {
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