import React, { Component } from 'react';
import PropTypes from "prop-types";

class Score extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
  }

  render() {
    return <div>{this.props.score}</div>;
  }
}

export default Score;
