import React, { Component } from 'react';
import './App.css';
const socketIOClient = require('socket.io-client');

class App extends Component {
  constructor(){
    super();
    this.state = {
      endpoint : "http://localhost:4000"
    };
  };

  printData = data => {
    document.getElementById("data").innerHTML += "<br/> <br/> <br/>" + JSON.stringify(data) ;
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("latestData", data => {
      this.printData(data);
      console.log("type of data is ", typeof(data));
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p id="data">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
