import React, {Component, Children, createElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Route from 'react-router-dom/Route'
import Redirect from 'react-router-dom/Redirect'
import SlidePage from './SlidePage'

//包装Route,为了可以传递参数

export default class Pages extends Component {

  static uiName = 'Pages'

  static propTypes = {
    noAnimation: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
    redirects: PropTypes.arrayOf(PropTypes.object),
  }

  static contextTypes = {
    hasNavbar: PropTypes.bool
  }

  renderRoutes = ()=>{
    const {
      children,
      routes,
      redirects
    } = this.props;

    let result = [];

    if(routes){
      result = routes.map((conf, i)=>{
        if(conf.path === '/'){
          conf.exact = true;
        }
        return createElement(Route, {key: `routes_${i}`, ...conf})
      })
    }

    if(redirects){
      result = result.concat(redirects.map((conf, i)=>{
        return createElement(Redirect, {key: `redirect_${i}`, ...conf})
      }))
    }

    return result;
  }

  render() {

    const {
      noAnimation,
      navbar,
      toolbar,
      className
    } = this.props;

    const {hasToolbar} = this.context;

    const cls = classnames({
      'navbar-through': navbar
    }, className);

    return (
      <SlidePage noAnimation={noAnimation} className={cls}>
        {this.renderRoutes()}
      </SlidePage>
    )
  }
}
