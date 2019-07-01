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
  private $canvas: HTMLCanvasElement
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
      // new GameBlock(0,0, "#ff0000")
      // new GameBlock(50,50, "#ff00ff")
      new Player(100,100,'#000000')
    }
  }
  componentDidMount() {
    this.$canvas = this.$canvasRef.current
    this.ctx = this.$canvas.getContext('2d')
    this.$world = World.GetInstance()
    this.$world.setCanvas(this)
    window.World = this.$world
    this.$map()
    this.$loop()
  }

  render () 
  {
    return(<div className="canvas-wrapper">
        <canvas ref={this.$canvasRef} width={this.width} height={this.height} />
    </div>)
  }

  $loop () {
    this.$world.draw(this.ctx)
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {this.$loop()})
    }, 1000 / this.$fps)
  }

}

