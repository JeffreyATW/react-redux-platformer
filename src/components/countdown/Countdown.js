import React, { Component, PropTypes } from 'react';
import './Countdown.css';

class Countdown extends Component {
  static propTypes = {
    countdown: PropTypes.number,
  }

  render() {
    const { countdown } = this.props;

    if (countdown !== undefined && countdown !== 0) {
      return (
        <div>
          <div>Last Call!</div>
          <div className="countdown">{countdown}</div>
        </div>
      );
    }
    return false;
  }
}

export default Countdown;
