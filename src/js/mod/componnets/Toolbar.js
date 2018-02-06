import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NavLink from 'react-router-dom/NavLink';

export default class Toolbar extends Component {

  static uiName = 'Toolbar';

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    height: 44
  }

  static contextTypes = {
    toolbarStatus: PropTypes.object,
    updateToolbarStatus: PropTypes.func
  }

  componentDidMount(){
    const {height} = this.props;
    this.context.updateToolbarStatus({ height, hasToolbar: true });
  }

  render() {
    const {
      className,
      children,
      height,
      style,
      ...other
    } = this.props;
    const toolbarStatus = this.context.toolbarStatus;
    const cls = classnames('toolbar', className);
    const styles = { height, display: toolbarStatus.showToolbar ? 'block': 'none' };

    return (
      <div className={cls} style={styles} {...other} ref="bar">
        <div className="toolbar-inner">
          {children}
        </div>
      </div>
    );
  }
}

export class ToolbarNavLink extends Component {

  static defaultProps = {
    exact: true
  }

  render(){
    const {
      to,
      exact,
      ...rest,
    } = this.props;

    const conf = {
      pathname: to,
      state: {
        nested: 0
      }
    };

    return <NavLink to={conf} replace exact={exact} {...rest}/>
  }
}
