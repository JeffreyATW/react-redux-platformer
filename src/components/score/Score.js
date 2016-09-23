import React, { Component, PropTypes } from 'react';

class Score extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
  }

  render() {
    return <div>{this.props.score}</div>;
  }
}

export default Score;
