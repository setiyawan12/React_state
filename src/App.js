import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends Component{
  constructor(props){
    super(props)

    this.state={
      time : props.start
    }
  }

  componentDidMount(){
    this.setInterval= setInterval(() =>this.increase(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){

    this.setState((state, props) =>({
      time: parseInt(state.time)+1
    }))
  }


  render(){
    return(
      <div> {this.state.time} detik</div>
    )
  }
}


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/setiyawan12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>YAYANG SETIYAWAN</h1>
        </a>
        <h1>
        <Timer start="0"/>
        <Timer start="1"/>
        <Timer start="2"/>
        </h1>
      </header>
    </div>
  );
}
}

export default App;
