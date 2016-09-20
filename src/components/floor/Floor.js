import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';

class Floor extends Component {
  static propTypes = {
    angle: PropTypes.number,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {wrapperStyles: {}};
  }

  componentDidMount() {
    const { angle } = this.props;

    let x = 0;
    let y = 0;
    if (this.body) {
      x = this.body.position.x;
      y = this.body.position.y;
    }

    this.setState({
      wrapperStyles: {
        height: `${this.props.height}px`,
        position: 'absolute',
        transform: `translate(${x - this.props.width / 2}px, ${y - this.props.height / 2}px) rotate(${angle}deg)`,
        transformOrigin: 'center',
        width: `${this.props.width}px`,
      }
    });
  }

  render() {
    const { angle, x, y, width, height } = this.props;

    return (
      <div style={this.state.wrapperStyles}>
        <Body args={[x, y, width, height]} angle={angle} isStatic ref={b => { this.body = b === null ? undefined : b.body; }}>
          <div style={{ background: 'repeating-linear-gradient(to right, blue 0px, green 50px)', height: '100%', width: '100%' }} />
        </Body>
      </div>
    );
  }
}

export default Floor;
