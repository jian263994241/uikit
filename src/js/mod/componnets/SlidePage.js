import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import AnimatedSwitch from './transition/AnimatedSwitch';
import spring from 'react-motion/lib/spring';
import withRouter from 'react-router-dom/withRouter';


const fullfade = { stiffness: 330, damping: 33, precision: 1 };
const halffade = { stiffness: 110, damping: 17, precision: 1 };

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
    atEnter: {},
    atLeave:{},
    atActive:{}
  }
}

class SlidePage extends Component {

  static uiName = 'SlidePage';

  static propTypes = {
    className: PropTypes.string,
    noAnimation: PropTypes.bool
  }

  static defaultProps = {
    noAnimation: false
  }

  render() {

    const {className, history, children, noAnimation, ...rest} = this.props;

    const { action, location } = history;

    const key = location.pathname;

    const state = location.state || {};

    const animationType = (()=>{
      if(noAnimation || state.animation === null){
        return 'empty';
      }
      if(action === 'POP' || state.animation === 'back'){
        return 'slide-right';
      }
      if(action === 'PUSH'|| action === 'REPLACE' || state.animation === 'push'){
        return 'slide-left';
      }
      return 'empty';
    })();

    const cls = classnames('pages', className ,{
      'slide-left' : (animationType === 'slide-left'),
      'slide-right' : (animationType === 'slide-right')
    });

    return (
        <AnimatedSwitch
          runOnMount={false}
          className={cls}
          containerCss="page-transition"
          {...pageAnimation[animationType]}
        >
          {children}
        </AnimatedSwitch>
    );
  }
}

export default withRouter(SlidePage);
