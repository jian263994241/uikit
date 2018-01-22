import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'
import $ from 'dom7'
import {mounted} from '../utils/mix'
import Icon from './Icon'


export class Navbar extends Component {

  static uiName = 'Navbar'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    noBorder:PropTypes.bool,
    theme: PropTypes.string,
    backText: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.bool]),
    onBack: PropTypes.func,
    center: PropTypes.any,
    left: PropTypes.element,
    right: PropTypes.element
  }

  sizeNavbars = (viewContainer) => {
      var navbarInner = viewContainer ? $(viewContainer).find('.navbar .navbar-inner:not(.cached)') : $('.navbar .navbar-inner:not(.cached)');
      navbarInner.each(function () {
          var n = $(this);
          if (n.hasClass('cached')) return;
          var left = n.find('.left'),
              right = n.find('.right'),
              center = n.find('.center'),
              subnavbar = n.find('.subnavbar'),
              noLeft = left.length === 0,
              noRight = right.length === 0,
              leftWidth = noLeft ? 0 : left.outerWidth(true),
              rightWidth = noRight ? 0 : right.outerWidth(true),
              centerWidth = center.outerWidth(true),
              navbarStyles = n.styles(),
              navbarWidth = n[0].offsetWidth - parseInt(navbarStyles.paddingLeft, 10) - parseInt(navbarStyles.paddingRight, 10),
              onLeft = n.hasClass('navbar-on-left'),
              currLeft, diff;

          if (noRight) {
              currLeft = navbarWidth - centerWidth;
          }
          if (noLeft) {
              currLeft = 0;
          }
          if (!noLeft && !noRight) {
              currLeft = (navbarWidth - rightWidth - centerWidth + leftWidth) / 2;
          }
          var requiredLeft = (navbarWidth - centerWidth) / 2;
          if (navbarWidth - leftWidth - rightWidth > centerWidth) {
              if (requiredLeft < leftWidth) {
                  requiredLeft = leftWidth;
              }
              if (requiredLeft + centerWidth > navbarWidth - rightWidth) {
                  requiredLeft = navbarWidth - rightWidth - centerWidth;
              }
              diff = requiredLeft - currLeft;
          }
          else {
              diff = 0;
          }

          // Center left
          var centerLeft = diff;

          center.css({left: centerLeft + 'px'});
      });
  }

  navPosFix = ()=>{
    this.sizeNavbars(this.refs.navbar)
  }

  componentDidMount() {
    $(window)
    .on('resize', this.navPosFix)
    .trigger('resize');
  }
  componentWillUnmount() {
    $(window).off('resize', this.navPosFix);
  }
  componentDidUpdate(prevProps, prevState){
    $(window).trigger('resize');
  }

  render() {

    const {
      theme,
      title,
      backText,
      noBorder,
      onBack,
      center,
      left,
      right,
      className,
      children,
      ...other
    } = this.props;

    const themeCss = theme? `theme-${theme}`: '';

    const cls = classnames({
      'navbar': true,
      'no-border': noBorder
    }, className);

    const BackButton = ()=>{
      const clickHandler = ()=>{
        if(onBack){ onBack() }else{ window.history.back() }
      };
      return (
        <a className={classnames({'back': backText, 'link': backText, 'icon-only': (backText != '')})} onClick={clickHandler}>
          <Icon type="left-nav"/><span>{backText}</span>
        </a>
      );
    };

    let navLeft = left, navRight = right, navCenter = center;

    if(!left && typeof backText != undefined){
      navLeft = (
        <BackButton/>
      )
    }

    if(!center && title){
      navCenter = title;
    }

    navLeft = mounted(navLeft, <div className="left"></div>);
    navRight = mounted(navRight, <div className="right"></div>);
    navCenter = mounted(navCenter, <div className="center" ref="center">{navCenter}</div>);


    return (
      <div className={cls} {...other} ref="Navbar">
        <div className="navbar-inner">
          {navLeft}
          {navCenter}
          {navRight}
          {children}
        </div>
      </div>
    );
  }
}


export class SubNavBar extends Component {

  static uiName = 'SubNavBar'

  static propTypes = {
    className: PropTypes.string,
    noBorder: PropTypes.bool
  }

  render() {
    const {
      className,
      noBorder,
      ...other
    } = this.props;

    const cls = classnames('subnavbar', {'no-border': noBorder}, className);

    return (
      <div className={cls} {...other} ref="SubNavBar"></div>
    );
  }
}
