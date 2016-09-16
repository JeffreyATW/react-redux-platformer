import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setScale } from '../../actions/scale';

class ScaleSetterInner extends Component {
  static propTypes = {
    scale: PropTypes.number.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.scale !== nextProps.scale) {
      this.props.setScale(nextProps.scale);
    }
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = dispatch => ({
  setScale: scale => dispatch(setScale(scale))
});

export default connect(
  null,
  mapDispatchToProps
)(ScaleSetterInner);
