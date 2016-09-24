import React, { PropTypes } from 'react';
import Character from '../character/Character';

class Part extends Character {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  }

  constructor() {
    super();
    this.boundOnClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.body = this.props.body;
    this.background = this.props.background;

    const { angle, x, y } = this.props;
    this.setState({ angle, x, y });
  }

  onClick() {
    this.props.removeBlock();
  }

  render() {
    return <div style={this.getWrapperStyles()} onClick={this.boundOnClick}>{this.paint()}</div>;
  }
}

export default Part;
