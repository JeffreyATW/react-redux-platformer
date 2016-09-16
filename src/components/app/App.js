import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Loop, Stage, World, TileMap } from 'react-game-kit';
import store from '../../store';
import ScaleSetterContainer from '../scaleSetter/ScaleSetterContainer';
import FloorContainer from '../floor/FloorContainer';
import CharacterContainer from '../character/CharacterContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loop>
          <Stage height={512} width={512}>
            <ScaleSetterContainer>
              <World>
                <FloorContainer />
                <CharacterContainer />
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
