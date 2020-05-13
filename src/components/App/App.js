import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {};
    this.state.numTiles = 36;
    this.state.playing=false;
    this.state.previousTitleIndex = null;
    this.state.tiles= [];
    this.state.toBeCleared = null;
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
        playing : true,
        previousTitleIndex: null,
        toBeCleared: null
      }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.state.startGame}/>
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles}/>
      }
    </div>
  );

  }
}

export default App;
