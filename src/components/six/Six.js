import React from 'react';
import Character from '../character/Character';

class Six extends Character {
  shape = 'polygon';

  makeArgs() {
    const { x, y, radius } = this.props;
    return [x, y, 6, radius];
  }

  getWrapperStyles() {
    const { x, y, radius } = this.props;
    let angle = 0;
    if (this.body) {
      angle = this.body.angle * (180/Math.PI);
    }

    const height = radius * 2;
    const width = Math.sqrt(3) * radius;

    return {
      height: `${height}px`,
      position: 'absolute',
      transform: `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${angle}deg)`,
      transformOrigin: 'center',
      width: `${width}px`,
    };
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
