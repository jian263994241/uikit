import React, { cloneElement, createElement, Component } from 'react';
import TransitionMotion from 'react-motion/lib/TransitionMotion';
import PropTypes from 'prop-types';

import ensureSpring from 'react-router-transition/lib/ensureSpring';

const identity = val => val;

class RouteTransition extends Component {
  static defaultProps = {
    wrapperComponent: 'div',
    runOnMount: false,
    mapStyles: identity,
  };

  static propTypes = {
    className: PropTypes.string,
    wrapperComponent: PropTypes.string,
    containerCss: PropTypes.string,
    atEnter: PropTypes.object.isRequired,
    atActive: PropTypes.object.isRequired,
    atLeave: PropTypes.object.isRequired,
    mapStyles: PropTypes.func.isRequired,
    runOnMount: PropTypes.bool.isRequired,
  };

  getDefaultStyles() {
    if (!this.props.runOnMount) {
      return null;
    }

    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.children.key,
        data: this.props.children,
        style: this.props.atEnter,
      },
    ];
  }

  // there's only ever one route mounted at a time,
  // so just return the current match
  getStyles() {
    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.children.key,
        data: this.props.children,
        style: ensureSpring(this.props.atActive),
      },
    ];
  }

  willEnter = () => {

    if('willEnter' in this.props){
      this.props.willEnter()
    }
    return this.props.atEnter;
  };

  willLeave = () => {
    return ensureSpring(this.props.atLeave);
  };

  didLeave = this.props.onRest

  renderRoute = config => {
    const props = {
      style: this.props.mapStyles(config.style),
      key: config.key,
      className: this.props.containerCss
    };
    return createElement(this.props.wrapperComponent, props, config.data);
  };

  renderRoutes = interpolatedStyles => {
    return (
      <div className={this.props.className}>
        {interpolatedStyles.map(this.renderRoute)}
      </div>
    );
  };

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        didLeave={this.didLeave}
      >
        {this.renderRoutes}
      </TransitionMotion>
    );
  }
}

export default RouteTransition;
