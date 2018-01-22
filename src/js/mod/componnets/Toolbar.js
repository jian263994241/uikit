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
    height: 44,
    show: true
  }

  static contextTypes = {
    updateToolbarHeihgt: PropTypes.func
  }

  componentDidMount(){
    const {updateToolbarHeihgt} = this.context;
    const {height} = this.props;
    updateToolbarHeihgt(height);
  }

  render() {
    const {
      className,
      children,
      height,
      show,
      style,
      ...other
    } = this.props;

    const cls = classnames('toolbar', className);
    const styles = { height, display: show ? 'block': 'none' };

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
