import React, { Component, PropTypes } from 'react';
import ScaleSetter from './ScaleSetter';

class ScaleSetterContainer extends Component {
  static contextTypes = {
    scale: PropTypes.number.isRequired,
  }

  render() {
    return (
      <ScaleSetter scale={this.context.scale}>
        {this.props.children}
      </ScaleSetter>
    )
  }
}

export default ScaleSetterContainer;
