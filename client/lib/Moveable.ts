import {KeyMap, Constructor} from '../Interfaces'
import { GameObject } from './GameObject';
import { Drawable } from './Drawable'

export function Moveable (Base: Constructor<GameObject>) {


  abstract class MoveableTrait extends Drawable(Base) {
    public isMoveable:boolean
    private $keys:KeyMap

    constructor () {
      super()
      this.isMoveable = true
      this.$keys = {}
      window.addEventListener('keydown', this.$keydown.bind(this))
      window.addEventListener('keyup', this.$keyup.bind(this))
    }

    private $keydown (e:KeyboardEvent) {
      this.$keys[e.key] = true
      this.keypress(this.$keys)
    }

    private $keyup (e:KeyboardEvent) {
      this.$keys[e.key] = false
    }

    abstract keypress(keys:KeyMap):void
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