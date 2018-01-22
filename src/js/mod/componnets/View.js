import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Navbar} from './Bars'
import Toolbar from './Toolbar';

export default class View extends Component {

  static uiName = 'View'

  static propTypes = {
    type: PropTypes.string,
    noAnimation: PropTypes.bool,
    navbar: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]),
    toolbar: PropTypes.node
  }

  static childContextTypes = {
    hasToolbar: PropTypes.bool,
    toolbarHeihgt: PropTypes.number,
    updateToolbarHeihgt: PropTypes.func,
    showToolbar: PropTypes.bool,
    toggleToobar: PropTypes.func,
  }

  static defaultProps = {
    toolbar: null
  }

  state = {
    toolbarHeihgt: null,
    showToolbar: false,
  }

  getChildContext(){
    return {
      hasToolbar: Boolean(this.props.toolbar),
      showToolbar: this.state.showToolbar,
      toggleToobar: ()=>this.setState({showToolbar: !this.state.showToolbar}),
      toolbarHeihgt: this.state.toolbarHeihgt,
      updateToolbarHeihgt: toolbarHeihgt => this.setState({ toolbarHeihgt }),
    }
  }

  renderToolbar = ()=>{
    const {toolbar} = this.props;
    if(toolbar) {
      return (
        <Toolbar {...toolbar.props} show={this.state.showToolbar}/>
      )
    }
  }

  render() {
    const {
      type,
      className,
      children,
      navbar,
      noAnimation,
      toolbar,
      ...rest
    } = this.props;

    let throughBar;

    if(navbar){
      throughBar = <Navbar className="theme-gray" {...navbar}/>
    }

    return (
      <div className={classnames('view', className)}>
        {throughBar}
        {this.renderToolbar()}
        {children}
      </div>
    );
  }
}
