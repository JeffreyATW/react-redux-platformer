import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Loop, Stage, World, TileMap, KeyListener } from 'react-game-kit';
import store from '../../store';
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
          <Stage height={512} width={512}>
            <ScaleSetterContainer>
              <World>
                <FloorContainer />
                <CharacterContainer keys={this.keyListener} />
                <TileMap layers={[[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]]} tileSize={128} columns={4} rows={4} scale={1} />
              </World>
            </ScaleSetterContainer>
          </Stage>
        </Loop>
      </Provider>
    );
  }
}

export default App;
