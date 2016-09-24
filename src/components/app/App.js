import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameLoop from 'react-game-kit/lib/utils/game-loop';
import { Loop, Stage, World } from 'react-game-kit';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../../constants';
import store from '../../store';
import ScoreContainer from '../score/ScoreContainer';
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
          <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
            <ScoreContainer />
            <StageSetterContainer />
            <World>
              <LevelContainer />
            </World>
          </Stage>
        </Loop>
      </Provider>
    );
  }
}

export default App;
