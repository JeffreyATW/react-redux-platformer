import React, { Component, PropTypes } from 'react';
import './HighScore.css';

class HighScore extends Component {
  static propTypes = {
    highScore: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div className="highScore">
        <div>Best: {this.props.highScore}</div>
      </div>
    );
  }
}

export default HighScore;
