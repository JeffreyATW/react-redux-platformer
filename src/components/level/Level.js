import React, { Component, PropTypes } from 'react';
import { KeyListener, TileMap } from 'react-game-kit';
import FloorContainer from '../floor/FloorContainer';
import CharacterContainer from '../character/CharacterContainer';

class Level extends Component {
  static propTypes = {
    stageX: PropTypes.number.isRequired
  }

  constructor() {
    super();

    this.keyListener = new KeyListener();
  }

  componentDidMount() {
    this.keyListener.subscribe([
      this.keyListener.LEFT,
      this.keyListener.RIGHT,
      this.keyListener.UP,
      this.keyListener.SPACE,
      this.keyListener.DOWN,
    ]);
  }

  componentWillUnmount() {
    this.keyListener.unsubscribe();
  }

  getWrapperStyles() {
    const { scale, stageX } = this.props;

    return {
      transform: `translateX(${-stageX * scale}px) scale(${scale})`,
    }
  }

  render() {
    return (
      <div style={this.getWrapperStyles()}>
        <FloorContainer />
        <CharacterContainer keys={this.keyListener} />
        <TileMap layers={[[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]]} tileSize={128} columns={4} rows={4} scale={1} />
      </div>
    )
  }
}

export default Level;
