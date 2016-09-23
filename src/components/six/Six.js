import React from 'react';
import Character from '../character/Character';

class Six extends Character {
  shape = 'polygon';

  makeArgs() {
    const { x, y } = this.state;
    const { radius } = this.props;
    return [x, y, 6, radius];
  }
  
  paint() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="174" viewBox="0 0 149.999999344516 173.20508">
        <path fill="#00f" d="M74.999999672258 0L149.999999344516 43.30127L149.999999344516 129.90381000000002L74.999999672258 173.20508L0 129.90381000000002L0 43.30127Z" />
      </svg>
    );
  }
}

export default Six;
