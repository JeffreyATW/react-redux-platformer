import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Loop, World, TileMap, KeyListener } from 'react-game-kit';
import store from '../../store';
import StageContainer from '../stage/StageContainer';
import ScaleSetterContainer from '../scaleSetter/ScaleSetterContainer';
import FloorContainer from '../floor/FloorContainer';
import CharacterContainer from '../character/CharacterContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.keyListener = new KeyListener();
  }

  componentDidMount() {
    this.keyListener.subscribe([
      this.keyListener.LEFT,
      this.keyListener.RIGHT,
      this.keyListener.UP,
      this.keyListener.SPACE,
      this.keyListener.DOWN,
      65,
    ]);
  }

  componentWillUnmount() {
    this.keyListener.unsubscribe();
  }

  render() {
    return (
      <Provider store={store}>
        <Loop>
          <StageContainer>
            <ScaleSetterContainer>
              <World>
                <FloorContainer />
                <CharacterContainer keys={this.keyListener} />
                <TileMap layers={[[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]]} tileSize={128} columns={4} rows={4} scale={1} />
              </World>
            </ScaleSetterContainer>
          </StageContainer>
        </Loop>
      </Provider>
    );
  }
}

export default App;
