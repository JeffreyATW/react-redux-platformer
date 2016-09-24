import React from 'react';
import { BLOCK_DIMENSION, SIX_RADIUS, STAGE_WIDTH } from '../../constants';
import Character from '../character/Character';

class Six extends Character {
  shape = 'polygon';

  constructor() {
    super();

    this.state = {
      angle: 30 * (Math.PI / 180),
      density: 0.0009,
      x: STAGE_WIDTH / 2,
      y: STAGE_WIDTH / 2 + BLOCK_DIMENSION * 2,
      height: SIX_RADIUS * 2,
      width: Math.sqrt(3) * SIX_RADIUS,
    }
  }

  makeArgs() {
    const { x, y } = this.state;
    return [x, y, 6, SIX_RADIUS];
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
