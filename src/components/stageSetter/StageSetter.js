import { Component, PropTypes } from 'react';

class StageSetter extends Component {
  static contextTypes = {
    scale: PropTypes.number.isRequired,
  }

  static propTypes = {
    characterX: PropTypes.number.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageX: PropTypes.number.isRequired,
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { scale } = this.context;
    const { setScale, characterX, stageWidth, setStageX } = this.props;

    if (scale !== nextContext.scale) {
      setScale(nextContext.scale);
    }
    if (characterX !== nextProps.characterX) {
      const thirdPoint = Math.abs(nextProps.stageX) + (stageWidth / 3);

      const shouldMoveStageLeft = nextProps.characterX < thirdPoint && nextProps.stageX > 0;
      // todo store level width in redux state
      const shouldMoveStageRight = nextProps.characterX > thirdPoint + stageWidth / 3 && nextProps.stageX < 1024;

      if (shouldMoveStageLeft) {
        setStageX(nextProps.characterX - (stageWidth / 3));
      } if (shouldMoveStageRight) {
        setStageX(nextProps.characterX - (stageWidth * 2 / 3));
      }
    }
  }

  render() {
    return false;
  }
}

export default StageSetter;
