import Character from '../character/Character';
import Matter from 'matter-js';

class Floor extends Character {
  isStatic = true;

  componentWillReceiveProps(nextProps) {
    if (this.props.y !== nextProps.y) {
      Matter.Body.setPosition(this.body, {x: nextProps.x, y: nextProps.y});
    }
  }
}

export default Floor;
