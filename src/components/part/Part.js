import React from 'react';
import PropTypes from "prop-types";
import { BLOCK_DIMENSION } from '../../constants';
import Character from '../character/Character';

class Part extends Character {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  }

  constructor() {
    super();
    this.boundOnClick = this.onClick.bind(this);

    this.state = {
      angle: 0,
      x: 0,
      y: 0,
      width: BLOCK_DIMENSION,
      height: BLOCK_DIMENSION,
    }
  }

  componentWillMount() {
    this.body = this.props.body;

    const { angle } = this.props;
    this.setState({ angle, x: this.body.position.x, y: this.body.position.y });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.angle !== nextProps.angle) {
      this.setState({ angle: nextProps.angle });
    }
  }

  onClick() {
    if (!this.props.gameOver) {
      this.props.removeBlock();
    }
  }

  render() {
    return <div style={this.getWrapperStyles()} onClick={this.boundOnClick}>{this.paint()}</div>;
  }
}

export default Part;
