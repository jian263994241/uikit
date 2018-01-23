import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class View extends Component {

  static uiName = 'View'

  static propTypes = {
    type: PropTypes.string,
    navbar: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }

  static childContextTypes = {
    toolbarStatus: PropTypes.object,
    updateToolbarStatus: PropTypes.func,
  }

  state = {
    toolbarStatus: {
      hasToolbar: false,
      showToolbar: false,
      heihgt: 0,
    }
  }

  updateToolbarStatus = conf => {
    this.state.toolbarStatus = {...this.state.toolbarStatus, ...conf}
    this.forceUpdate();
  }

  getChildContext(){
    return {
      toolbarStatus: this.state.toolbarStatus,
      updateToolbarStatus: this.updateToolbarStatus
    }
  }


  render() {
    const {
      type,
      className,
      children,
      ...rest
    } = this.props;

    return (
      <div className={classnames('view', className)}>
        {children}
      </div>
    );
  }
}
