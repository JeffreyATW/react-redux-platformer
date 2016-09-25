import React, { Component, PropTypes } from 'react';

class GameOver extends Component {
  static propTypes = {
    gameOver: PropTypes.bool.isRequired,
  }

  render() {
    const { gameOver } = this.props;

    if (gameOver) {
      return <div>Game Over!</div>;
    }
    return false;
  }
}

export default GameOver;
