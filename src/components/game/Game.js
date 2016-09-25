import React, { Component, PropTypes } from 'react';
import { Loop, Stage, World } from 'react-game-kit';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../../constants';
import ScoreContainer from '../score/ScoreContainer';
import GameOverContainer from '../gameOver/GameOverContainer';
import CountdownContainer from '../countdown/CountdownContainer';
import StageSetterContainer from '../stageSetter/StageSetterContainer';
import LevelContainer from '../level/LevelContainer';

class Game extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired,
    started: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.start();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.started) {
      nextProps.start();
    }
  }

  render() {
    if (this.props.started) {
      return (
        <Loop>
          <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
            <StageSetterContainer />
            <div className="ui">
              <ScoreContainer />
              <GameOverContainer />
              <CountdownContainer />
            </div>
            <World>
              <LevelContainer />
            </World>
          </Stage>
        </Loop>
      );
    }
    return false;
  }
}

export default Game;
