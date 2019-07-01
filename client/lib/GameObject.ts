import {World, Vector} from './index'

export class GameObject
{
    public world: World
    public isMoveable:boolean
    public isDrawable:boolean
    public isRotateable:boolean
    public rotation: number
    public x: number
    public y: number
    public width: number
    public height: number
    public canvas: Vector
    public position: Vector
    public center: Vector

    public constructor () {
      this.world = World.GetInstance()
      this.world.add(this)
      this.isMoveable = false
      this.isDrawable = false
      this.isRotateable = false
      this.rotation = 0
      this.canvas = new Vector(0,0)
      this.position = new Vector(0,0)
      this.center = new Vector(0,0)
      // World.GetInstance().add(this)
    }
    public draw(ctx:CanvasRenderingContext2D):void {
      throw new Error("GameObject not drawable.")
    }

    public update(){}
}