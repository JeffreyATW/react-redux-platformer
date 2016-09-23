import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameLoop from 'react-game-kit/lib/utils/game-loop';
import { Loop, World } from 'react-game-kit';
import store from '../../store';
import StageContainer from '../stage/StageContainer';
import StageSetterContainer from '../stageSetter/StageSetterContainer';
import LevelContainer from '../level/LevelContainer';
import './App.css';

// monkeypatch GameLoop to delete instead of splice
GameLoop.prototype.unsubscribe = function (id) {
  delete this.subscribers[id - 1];
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loop>
          <StageContainer>
            <StageSetterContainer />
            <World>
              <LevelContainer />
            </World>
          </StageContainer>
        </Loop>
      </Provider>
    );
  }
}

export default App;
