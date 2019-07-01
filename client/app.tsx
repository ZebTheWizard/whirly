import * as React from "react";
import * as ReactDOM from "react-dom";
import {Canvas} from './Components'
// import {GameObject, GameBlock, Moveable} from './lib'

declare global {
  interface Window { 
    [key:string]: any;
  }
}
// window['World'] = 
// window['GameBlock'] = GameBlock
// window['Moveable'] = Moveable


const App = () => {
  return (<Canvas width={400} height={400}/>);
};

ReactDOM.render(<App />, document.querySelector("#root"));