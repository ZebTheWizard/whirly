import * as React from "react";
import * as IFC from '../Interfaces/ifc_canvas'
import {World, GameBlock} from '../lib'

export class Canvas extends React.Component<IFC.CanvasProps>
{
  private $height: number;
  private $width: number;
  private $fps: number;
  private $canvasRef: React.RefObject<HTMLCanvasElement>
  private $canvas: HTMLCanvasElement
  private $ctx: CanvasRenderingContext2D
  private $map: any
  private $world: World

  constructor(props: IFC.CanvasProps)
  {
    super(props)
    this.$width = props.width
    this.$height = props.height
    this.$canvasRef = React.createRef()
    this.$world = World.GetInstance()
    this.$map = function () {
      new GameBlock(0,0, "#ff0000")
      new GameBlock(50,50, "#ff00ff")
    }
  }
  componentDidMount() {
    this.$canvas = this.$canvasRef.current
    this.$ctx = this.$canvas.getContext('2d')
    this.$map()
    this.$loop()
  }

  render () 
  {
    return(<div className="canvas-wrapper">
        <canvas ref={this.$canvasRef} width={this.$width} height={this.$height} />
    </div>)
  }

  $loop () {
    this.$ctx.clearRect(0,0, this.$width, this.$height)
    this.$world.draw(this.$ctx)
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {this.$loop()})
    }, 1000 / this.$fps)
  }

}

