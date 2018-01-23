import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import device from '../utils/device'
import $ from 'dom7'

export default class Page extends Component {

  static uiName = 'Page'

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.string,
    navbarFixed: PropTypes.bool,
    toolbarFixed: PropTypes.bool
  }

  static defaultProps = {
    waiting: false,
    navbarFixed: false,
    showToolbar: false,
  }

  static contextTypes = {
    toolbarStatus: PropTypes.object,
    updateToolbarStatus: PropTypes.func
  }

  componentDidMount() {
    const {updateToolbarStatus, toolbarStatus} = this.context;
    updateToolbarStatus({showToolbar: this.props.showToolbar});
  }

  render() {

    const {
      title,
      theme,
      navbarFixed,
      toolbarFixed,
      className,
      waiting,
      children,
      showToolbar,
      ...other
    } = this.props;

    const themeCss = theme? `theme-${theme}`: '';

    let cls = classnames('page', {
      'navbar-fixed': navbarFixed,
      'toolbar-fixed': toolbarFixed
    } ,themeCss, className);

    let hasNavbar = false;

    if(waiting){
      return <div className="page"><span className="progressbar-infinite"></span></div>;
    }

    React.Children.forEach(children, (child, index)=>{
      if(child.type && child.type.uiName === 'Navbar'){
        hasNavbar = true;
      }
    });

    if(!navbarFixed && hasNavbar){
      cls = classnames(cls, 'navbar-fixed');
    }

    return (
      <div
        className={cls}
        ref="Page"
        {...other}>
        {children}
      </div>
    );
  }

}
