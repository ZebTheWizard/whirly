import * as React from "react";
import {CanvasProps} from './CanvasInterfaces'

export default class Canvas extends React.Component<object>
{

}
// import Thing from "../lib/Thing"
// import GameObject from './GameObject'

// export default class Canvas extends React.Component {
//   constructor(props) 
//   {
//     super(props)
//     this.width = 640
//     this.height = 425
//     this.fps = 30
//     this.canvasRef = React.createRef()
//     this.canvas = null
//     this.ctx = null
//   }
//   componentDidMount() {
//     this.canvas = this.canvasRef.current
//     this.ctx = this.canvas.getContext('2d')
//     window.Thing = Thing
//     this._loop()
//   }
//   render() {
//     return(
//       <div>
//         <canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} />
//       </div>
//     )
//   }
  
//   _loop() {
//     window.setTimeout(() => {
//       window.requestAnimationFrame(() => {this._loop()})
//     }, 1000 / this.fps)
//   }
  
//   addObjectToWorld(obj) {
//     Thing.verify(obj, GameObject)
//   }
// }
