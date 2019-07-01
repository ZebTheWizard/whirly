import {GameObject} from './index'
import { Vector } from './Vector';

export class World
{
    protected static $instance: World
    private $gameObjects: Array<GameObject>
    public canvas:any
    public mouse:Vector
    public rotationMode:string

    static GetInstance() {
      if (!this.$instance) {
        this.$instance = new World()
      }
      return this.$instance
    }

    constructor () {
      this.$gameObjects = []
      window.addEventListener('mousemove', this.$mouseMove.bind(this))
      this.rotationMode = "keyboard"
      this.mouse = new Vector(0,0)
    }

    private $mouseMove(e:MouseEvent) {
      // console.log(this.canvas.$el.style)
      var offset = this.canvas.$el.getBoundingClientRect()
      console.log(offset)
      this.mouse = new Vector(e.clientX - offset.left, e.clientY - offset.top)
    }
    
    setCanvas(canvas:any) {
      this.canvas = canvas
    }

    add(gameObject: GameObject) {
      this.$gameObjects.push(gameObject)
    }
    draw(ctx:CanvasRenderingContext2D) {
      this.$gameObjects.forEach((gameObject: GameObject) => {
        if (gameObject.isRotateable) {
          // console.log(gameObject.rotation, gameObject.x, gameObject.y)
          var xOffset = gameObject.width / -2
          var yOffset = gameObject.height / -2
          
          
          ctx.save()
          
          ctx.translate(gameObject.canvas.value('x'), gameObject.canvas.value('y'))
          ctx.rotate(gameObject.rotation)
          gameObject.position.set(new Vector(xOffset, yOffset))
          gameObject.center.set(new Vector(gameObject.canvas.value('x') - gameObject.width / 2, gameObject.canvas.value('y') - gameObject.height / 2))
          gameObject.clear(ctx)
          gameObject.draw(ctx)
          ctx.restore()
          gameObject.update()
        }
        else if (gameObject.isDrawable) {
          ctx.save()
          gameObject.clear(ctx)
          gameObject.draw(ctx)
          ctx.restore()
        }
      })
    }
}