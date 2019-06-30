import {GameObject} from './index'

export class World
{
    protected static $instance: World

    static GetInstance() {
      if (!this.$instance) {
        this.$instance = new World()
      }
      return this.$instance
    }
    
    private $gameObjects: Array<GameObject>

    constructor () {
      this.$gameObjects = []
    }
    
    add(gameObject: GameObject) {
      this.$gameObjects.push(gameObject)
    }
    draw(ctx:CanvasRenderingContext2D) {
      this.$gameObjects.forEach((gameObject: GameObject) => {
        ctx.save()
        if (gameObject.isDrawable) {
          gameObject.draw(ctx)
        }
        ctx.restore()
      })
    }
}