import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import AnimatedSwitch from './transition/AnimatedSwitch';
import spring from 'react-motion/lib/spring';
import styled from 'styled-components';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';

import {StylePages} from './Styled';

const Switch = StylePages.withComponent(AnimatedSwitch);

const fullfade = { stiffness: 300, damping: 30, precision: 1 };
const halffade = { stiffness: 200, damping: 30, precision: 1 };
const crude = {stiffness: 110, damping:17, precision: 100};

const pageAnimation = {
  'slide-left': {
    atEnter: {
      offset: 100,
      opacity: 100
    },
    atLeave: {
      offset: spring(-22, halffade),
      opacity: spring(90, halffade)
    },
    atActive: {
      offset: spring(0, fullfade),
      opacity: spring(100, fullfade)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`,
        opacity: styles.opacity/100
      };
    },
  },
  'slide-right': {
    atEnter: {
      offset: -22,
      opacity: 90
    },
    atLeave: {
      offset: spring(102, fullfade),
      opacity: spring(90, fullfade)
    },
    atActive: {
      offset: spring(0, halffade),
      opacity: spring(100, halffade)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(${styles.offset}%)`,
        opacity: styles.opacity/100
      };
    }
  },
  'empty': {
    atEnter: {
      offset: -22,
      opacity: 90
    },
    atLeave: {
      offset: spring(102, crude),
      opacity: spring(90, crude)
    },
    atActive: {
      offset: spring(0, crude),
      opacity: spring(100, crude)
    },
    mapStyles(styles) {
      return {
        transform: `translateX(0%)`,
        opacity: styles.opacity/100
      };
    }
  }
}

class Pages extends Component {

  static propTypes = {
    noAnimation: PropTypes.bool,
    shadow: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
    redirects: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    noAnimation: false,
    shadow: true,
    routes: null,
    redirects: null
  }

  renderRoutes = ()=>{
    const {
      children,
      routes,
      redirects
    } = this.props;

    let result = Children.toArray(children);

    if(routes){
      result = result.concat(routes.map((conf, i)=>{
        if(conf.path === '/'){
          conf.exact = true;
        }
        return createElement(Route, {key: `route_${i}`, ...conf})
      }));
    }

    if(redirects){
      result = result.concat(redirects.map((conf, i)=>{
        return createElement(Redirect, {key: `redirect_${i}`, ...conf})
      }))
    }

    return result;
  }

  render(){
    const {
      history,
      children,
      noAnimation,
      shadow,
      ...rest
    } = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const state = location.state || {};

    const animationType = (()=>{
      if(noAnimation || state.nested === 0){
        return 'empty';
      }
      if(action === 'POP' || state.nested === -1){
        return 'slide-right';
      }
      if(action === 'PUSH'|| action === 'REPLACE' || state.nested === 1){
        return 'slide-left';
      }
      return 'empty';
    })();

    return (
      <Switch
        runOnMount={false}
        reverse={animationType==='slide-right'}
        shadow={shadow}
        {...pageAnimation[animationType]}
      >
        {this.renderRoutes()}
      </Switch>
    );
  }
}

export default withRouter(Pages);