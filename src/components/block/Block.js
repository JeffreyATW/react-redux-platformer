import React, { Component, PropTypes } from 'react';
import { STAGE_HEIGHT } from '../../constants';
import PartContainer from '../part/PartContainer';
import Matter from 'matter-js';

class Block extends Component {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  }

  constructor() {
    super();

    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 64);
    const b = Math.ceil(Math.random() * 128);

    this.state = {
      angle: 0,
      background: `rgb(${r}, ${g}, ${b})`,
    }

    this.boundUpdate = this.update.bind(this);
  }

  componentWillMount() {
    this.body = this.props.body;
    Matter.World.addBody(this.context.engine.world, this.body);

    this.setState({
      angle: this.body.angle,
    });
  }

  componentDidMount() {
    this.updateId = this.context.loop.subscribe(this.boundUpdate);
  }

  componentWillUnmount() {
    Matter.World.remove(this.context.engine.world, this.body);
    this.context.loop.unsubscribe(this.updateId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameOver) {
      this.setState({
        background: 'black',
      });
    }
  }

  update() {
    const { angle } = this.state;
    const { stageY, deleteBlock } = this.props;

    if (this.body) {
      if (this.body.position.y > stageY + STAGE_HEIGHT) {
        deleteBlock();
      } else {
        const fixedAngle = Number(angle.toFixed(4));
        const fixedBodyAngle = Number(this.body.angle.toFixed(4));

        if (
          fixedAngle !== fixedBodyAngle
        ) {
          this.setState({
            angle: fixedBodyAngle,
          });
        }
      }
    }
  }

  render() {
    const { id } = this.props;
    const { angle, background } = this.state;

    return (
      <div>
        {this.body.parts.map((part, i) =>
          i !== 0 && <PartContainer angle={angle} blockId={id} key={`block_${id}_part_${i}`} body={part} background={background} />
        )}
      </div>
    );
  }
}

export default Block;
