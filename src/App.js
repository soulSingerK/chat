import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Top from './components/top/top.js'
import Left from './components/left/left.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top></Top>
        <div className="bottom-wrapper">
          <Left></Left>
        </div>
      </div>
    );
  }
}

export default App;
