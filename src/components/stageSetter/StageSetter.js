import { Component } from 'react';
import PropTypes from "prop-types";

class StageSetter extends Component {
  static contextTypes = {
    scale: PropTypes.number.isRequired,
  }

  static propTypes = {
    setScale: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { scale } = this.context;
    const { setScale } = this.props;

    if (scale !== nextContext.scale) {
      setScale(nextContext.scale);
    }
  }

  render() {
    return false;
  }
}

export default StageSetter;
