import {GameObject} from './index'
import { Vector } from './Vector';

export class World
{
    protected static $instance: World
    private $gameObjects: Array<GameObject>
    public canvas:any
    public mouse:Vector

    static GetInstance() {
      if (!this.$instance) {
        this.$instance = new World()
      }
      return this.$instance
    }

    constructor () {
      this.$gameObjects = []
      window.addEventListener('mousemove', this.$mouseMove.bind(this))
    }

    private $mouseMove(e:MouseEvent) {
      this.mouse = new Vector(e.pageX, e.pageY)
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
          gameObject.update()
          ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
          ctx.save()
          ctx.translate(gameObject.canvas.value('x'), gameObject.canvas.value('y'))
          ctx.rotate(gameObject.rotation)
          gameObject.position.set(new Vector(xOffset, yOffset))
          gameObject.center.set(new Vector(gameObject.canvas.value('x') - gameObject.width / 2, gameObject.canvas.value('y') - gameObject.height / 2))
          gameObject.draw(ctx)
          ctx.restore()
        }
        else if (gameObject.isDrawable) {
          ctx.save()
          ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
          gameObject.draw(ctx)
          ctx.restore()
        }
      })
    }
}