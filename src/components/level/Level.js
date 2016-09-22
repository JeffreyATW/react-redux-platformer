import React, { Component, PropTypes } from 'react';
import { KeyListener, TileMap } from 'react-game-kit';
import FloorContainer from '../floor/FloorContainer';
import CharacterContainer from '../character/CharacterContainer';

class Level extends Component {
  static propTypes = {
    stageHeight: PropTypes.number.isRequired,
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
      transformOrigin: 'top left',
    }
  }

  render() {
    const { stageHeight } = this.props;

    return (
      <div style={this.getWrapperStyles()}>
        <FloorContainer />
        <FloorContainer width={50} height={stageHeight * 3} y={stageHeight / 2} x={-25} />
        <FloorContainer width={200} y={300} x={-10} angle={60} />
        <FloorContainer width={200} y={300} x={10} angle={50} />
        <FloorContainer width={200} y={300} x={30} angle={40} />
        <FloorContainer width={200} y={300} x={70} angle={30} />
        <FloorContainer width={200} y={300} x={90} angle={20} />
        <FloorContainer width={200} y={300} x={110} angle={10} />
        <FloorContainer width={200} y={300} x={130} angle={0} />
        <FloorContainer width={200} y={300} x={150} angle={-10} />
        <CharacterContainer keys={this.keyListener} />
        <TileMap layers={[[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]]} tileSize={128} columns={4} rows={4} scale={1} />
      </div>
    )
  }
}

export default Level;
