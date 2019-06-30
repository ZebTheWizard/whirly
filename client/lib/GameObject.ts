import {World} from './index'

export class GameObject
{
    private $world: World
    public isMoveable:boolean
    public isDrawable:boolean

    public constructor () {
      this.$world = World.GetInstance()
      this.$world.add(this)
      this.isMoveable = false
      this.isDrawable = false
      // World.GetInstance().add(this)
    }
    public draw(ctx:CanvasRenderingContext2D):void {
      throw new Error("GameObject not drawable.")
    }
}