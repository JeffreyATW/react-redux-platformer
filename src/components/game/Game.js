import React, { Component, PropTypes } from 'react';
import { Loop, Stage, World } from 'react-game-kit';
import { STAGE_HEIGHT, STAGE_WIDTH } from '../../constants';
import ScoreContainer from '../score/ScoreContainer';
import GameOverContainer from '../gameOver/GameOverContainer';
import CountdownContainer from '../countdown/CountdownContainer';
import StageSetterContainer from '../stageSetter/StageSetterContainer';
import LevelContainer from '../level/LevelContainer';
import './Game.css';

class Game extends Component {
  static propTypes = {
    restart: PropTypes.func.isRequired,
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
    const { started, restart } = this.props;

    if (started) {
      return (
        <Loop>
          <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
            <StageSetterContainer />
            <div className="ui">
              <button className="restart" onClick={restart}>Restart</button>
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
