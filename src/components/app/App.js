import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameLoop from 'react-game-kit/lib/utils/game-loop';
import store from '../../store';
import GameContainer from '../game/GameContainer';
import './App.css';

// monkeypatch GameLoop to delete instead of splice
GameLoop.prototype.unsubscribe = function (id) {
  delete this.subscribers[id - 1];
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );
  }
}

export default App;
