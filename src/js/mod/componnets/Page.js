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
  }

  componentDidMount() {
    this.setDocumentTitle();
    console.log(this.props);
  }


  setDocumentTitle = () => {
    if(!this.props.title) return ;
    document.title = this.props.title;

    if (device.ios && device.webView) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';
      i.onload = function() {
          setTimeout(function(){
              i.remove();
          }, 9)
      }
      document.body.appendChild(i);
    }
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
