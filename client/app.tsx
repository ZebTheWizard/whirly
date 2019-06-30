import * as React from "react";
import * as ReactDOM from "react-dom";
import {Canvas} from './Components'
// import {GameObject, GameBlock, Moveable} from './lib'

// declare global {
//   interface Window { 
//     GameObject: any;
//     GameBlock: any;
//     Moveable: any;
//   }
// }
// window['GameObject'] = GameObject
// window['GameBlock'] = GameBlock
// window['Moveable'] = Moveable


const App = () => {
  return (<div>
    hello from ts react! <Canvas width={640} height={640}/>
  </div>);
};

ReactDOM.render(<App />, document.querySelector("#root"));