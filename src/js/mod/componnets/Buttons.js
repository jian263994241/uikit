import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {Link} from 'react-router-dom'

export class Button extends Component {

  static uiName = 'Button'

  static propTypes = {
    className: PropTypes.string,
    fill: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    color: PropTypes.string,
    active: PropTypes.bool,
    tabLink: PropTypes.bool,
    component: PropTypes.any
  }

  static defaultProps = {
    block: true,
    fill: true,
    component: 'a'
  }

  render() {
    const {
      fill,
      round,
      big,
      block,
      color,
      active,
      tabLink,
      submit,
      className,
      component,
      children,
      ...rest
    } = this.props;

    const buttonColor = color? `color-${color}`: '';

    const cls = classnames({
      'button': true,
      'button-block': block,
      'button-big': big,
      'button-round': round,
      'button-fill': fill,
      'active': active,
      'tab-link': tabLink
    }, buttonColor, className);

    const ButtonElement = submit? 'button': component;

    return (
      <ButtonElement className={cls} {...rest} ref="Button">{children}</ButtonElement>
    );
  }
}

export class ButtonsSegmented extends Component {
  static uiName = 'ButtonsSegmented'

  static propTypes = {
    className: PropTypes.string,
    activeIndex: PropTypes.number
  }

  state = {
    activeIndex : 0
  }

  componentWillMount() {
    const {activeIndex} = this.props;
    if(activeIndex){
      this.setState({activeIndex});
    }
  }

  render() {
    const {
      className,
      activeIndex,
      children,
      ...other
    } = this.props;

    const cls = classnames('buttons-row', className);

    const childrenTransfrom = React.Children.map(children, (child, index)=>{
      const active = activeIndex === index;
      return React.cloneElement(child, {active: active, tabLink:true, fill: false});
    })

    return (
      <div className={cls} {...other} ref="ButtonsSegmented"> {childrenTransfrom} </div>
    );
  }
}