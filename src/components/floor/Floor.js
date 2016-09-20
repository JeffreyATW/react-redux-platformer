import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';

class Floor extends Component {
  static propTypes = {
    stageHeight: PropTypes.number.isRequired,
    stageWidth: PropTypes.number.isRequired,
  }

  height = 50;
  width = 1024;

  constructor(props) {
    super(props);

    this.state = {wrapperStyles: {}};
  }

  componentDidMount() {
    let x = 0;
    let y = 0;
    if (this.body) {
      x = this.body.position.x;
      y = this.body.position.y;
    }

    this.setState({
      wrapperStyles: {
        height: `${this.height}px`,
        position: 'absolute',
        transform: `translate(${x - this.width / 2}px, ${y - this.height / 2}px)`,
        transformOrigin: 'left top',
        width: `${this.width}px`,
      }
    });
  }

  render() {
    const { stageHeight, stageWidth } = this.props;

    return (
      <div style={this.state.wrapperStyles}>
        <Body args={[stageWidth / 2, stageHeight - (this.height / 2), this.width, this.height]} isStatic ref={b => { this.body = b === null ? undefined : b.body; }}>
          <div style={{ background: 'repeating-linear-gradient(to right, blue 0px, green 50px)', height: '100%', width: '100%' }} />
        </Body>
      </div>
    );
  }
}

export default Floor;
