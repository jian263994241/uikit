import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class ListLabel extends Component {
  static uiName = 'ListBlockLabel'

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('list-block-label', className);
    return (
      <div className={cls} {...other}>{children}</div>
    );
  }
}
