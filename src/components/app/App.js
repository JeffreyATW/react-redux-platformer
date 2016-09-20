import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Loop, World } from 'react-game-kit';
import store from '../../store';
import StageContainer from '../stage/StageContainer';
import StageSetterContainer from '../stageSetter/StageSetterContainer';
import LevelContainer from '../level/LevelContainer';
import './App.css';

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
