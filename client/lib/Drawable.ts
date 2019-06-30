import {KeyMap, Constructor} from '../Interfaces'
import { GameObject } from './index';

export function Drawable (Base: Constructor<GameObject>) {


  abstract class DrawableTrait extends Base {
    public isDrawable:boolean

    constructor () {
      super()
      this.isDrawable = true
    }

    abstract draw(ctx:CanvasRenderingContext2D):void
  }



  return DrawableTrait;
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