import Character from '../character/Character';
import { BLOCK_DIMENSION, STAGE_WIDTH, STAGE_HEIGHT } from '../../constants';
import Matter from 'matter-js';

class Floor extends Character {
  isStatic = true;

  constructor() {
    super();

    const width = BLOCK_DIMENSION * 5;

    this.state = {
      angle: 0,
      height: BLOCK_DIMENSION,
      width,
      x: STAGE_WIDTH / 4 + width / 2,
      y: 0,
    }
  }

  componentWillMount() {
    this.setState({
      y: STAGE_HEIGHT / 2 + (this.props.rows * this.state.height) + this.state.height / 2,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rows !== nextProps.rows) {
      const y = STAGE_HEIGHT / 2 + (nextProps.rows * this.state.height) + this.state.height / 2;

      Matter.Body.setPosition(this.body, {x: this.state.x, y});

      this.setState({ y });
    }
  }
}

export default Floor;
