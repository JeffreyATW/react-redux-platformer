import React, { Component, PropTypes } from 'react';

class Countdown extends Component {
  static propTypes = {
    countdown: PropTypes.number,
  }

  render() {
    const { countdown } = this.props;

    if (countdown !== undefined && countdown !== 0) {
      return <div>Last Call: {countdown}</div>;
    }
    return false;
  }
}

export default Countdown;
