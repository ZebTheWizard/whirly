import * as React from "react";
import * as IFC from '../Interfaces/ifc_canvas'
import {World, GameBlock} from '../lib'
import { Player } from "../lib/Player";

export class Canvas extends React.Component<IFC.CanvasProps>
{
  public height: number;
  public width: number;
  private $fps: number;
  private $canvasRef: React.RefObject<HTMLCanvasElement>
  public $el: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D
  private $map: any
  private $world: World

  constructor(props: IFC.CanvasProps)
  {
    super(props)
    this.width = props.width
    this.height = props.height
    this.$canvasRef = React.createRef()
    
    this.$map = function () {
      var bg = new GameBlock(0,0, "#ccc")
      bg.width = this.width
      bg.height = this.height
      // new GameBlock(0,0, "#ff0000")
      new GameBlock(50,50, "#ff00ff")
      new Player(100,100,'#000000')
    }
  }
  componentDidMount() {
    this.$el = this.$canvasRef.current
    this.ctx = this.$el.getContext('2d')
    this.$world = World.GetInstance()
    this.$world.setCanvas(this)
    window.World = this.$world
    this.$map()
    this.$loop()
  }

  render () 
  {
    return(<div className="canvas-wrapper">
        <button onClick={this.$toggle.bind(this)}>Toggle: Using Arrows/WASD</button>
        <canvas ref={this.$canvasRef} width={this.width} height={this.height} />
    </div>)
  }

  private $toggle () {
    if (this.$world.rotationMode == "keyboard") {
      this.$world.rotationMode = "mouse"
    } else {
      this.$world.rotationMode = "keyboard"
    }
  }

  private $loop () {
    // this.ctx.save()
    // this.ctx.fillStyle = "#ff0000"
    // this.ctx.fillRect(0,0, 500, 500)
    // this.ctx.restore()
    this.$world.draw(this.ctx)
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {this.$loop()})
    }, 1000 / this.$fps)
  }

}

