import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    numbers:[]
  }
  componentWillMount() {
    let {numbers} = this.state
    for(let i = 0; i<100;i++){
      numbers.push(i)
    }
    this.setState({numbers})
  }

  drawNumbers = ()=>{
    let {numbers} = this.state
    return numbers.map((e,i)=> {
          switch (true) {
            case e%3 == 0:
              return <div>Fizz</div>
            default :
              return <div>{e}</div>
          }
        }
    )
  }

  render() {
    return (
      <div className="App">
        Home app
        {this.drawNumbers()}
      </div>
    );
  }
}

export default App;
