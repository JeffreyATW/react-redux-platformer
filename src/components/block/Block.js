import Character from '../character/Character';

class Block extends Character {
  constructor() {
    super();
    this.boundOnClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.removeBlock();
  }
}

export default Block;
