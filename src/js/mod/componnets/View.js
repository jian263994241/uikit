import React, {Component, Children, cloneElement} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HashRouter, MemoryRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import SlidePage from './SlidePage'
import {Navbar} from './Bars'

export default class View extends Component {

  static uiName = 'View'

  static defaultProps = {
    type : 'memory'
  }

  static propTypes = {
    type: PropTypes.string,
    noAnimation: PropTypes.bool,
    navbar: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }

  render() {
    const {
      type,
      className,
      children,
      getHistory,
      navbar,
      noAnimation,
      ...rest
    } = this.props;

    let Router;

    switch (type) {
      case 'browser':
        Router = BrowserRouter;
        break;
      case 'memory':
        Router = MemoryRouter;
        break;
      case 'hash':
      default:
        Router = HashRouter;
    }

    let throughBar;

    if(navbar){
      throughBar = <Navbar className="theme-gray" {...navbar}/>
    }

    return (
      <div className={classnames('view', className)}>
        {throughBar}
        <Router hashType="hashbang" {...rest}>
          <SlidePage noAnimation={noAnimation} className={classnames({'navbar-through': navbar})}>
            {children}
          </SlidePage>
        </Router>
      </div>
    );
  }
}
