import React, { Component, PropTypes } from 'react';

class GameOver extends Component {
  static propTypes = {
    gameOver: PropTypes.bool.isRequired,
  }

  render() {
    const { gameOver, restart } = this.props;

    if (gameOver) {
      return (
        <div>
          {'Game Over! '}
          <button onClick={restart}>Restart</button>
        </div>
      );
    }
    return false;
  }
}

export default GameOver;
