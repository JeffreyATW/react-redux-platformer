import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import GameContainer from '../game/GameContainer';

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
