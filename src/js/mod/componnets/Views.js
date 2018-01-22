import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import HashRouter from 'react-router-dom/HashRouter'
import initFastClicks from '../utils/fastclick'
import device from '../utils/device'
import emptyfunction from 'emptyfunction'

export default class Views extends Component {

  static uiName = 'Views'

  static propTypes = {
    type: PropTypes.string,
    fastclick: PropTypes.bool,
    fastclickConfig: PropTypes.object,
    router: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func
    ]).isRequired,

    /**
     * (location, action)=>
     */
    onRouteChange: PropTypes.func,
    onRouteInit: PropTypes.func,
  }

  static defaultProps = {
    fastclick: true,
    router: [HashRouter, {
      hashType: 'hashbang',
      basename: '',
      getUserConfirmation: null
    }],
    onRouteChange: emptyfunction,
    onRouteInit: emptyfunction
  }

  componentDidMount() {
    const {fastclick, fastclickConfig, onRouteChange, onRouteInit} = this.props;
    const history = this.refs.router.history;

    fastclick && initFastClicks(fastclickConfig);

    device.statusBar && $('.root').prepend('<div className="statusbar-overlay"></div>');
    this._unlisten = history.listen(onRouteChange);
    onRouteInit(history.location, history.action);
  }

  componentWillUnMount(){
    this._unlisten();
  }

  render() {
    const {
      className,
      children,
      fastclick,
      fastclickConfig,
      router,
      onRouteChange,
      ...rest
    } = this.props;

    const cls = classnames('views', className);
    const Router = router[0];
    const RouterConf = router[1] || {};

    return (
      <Router {...RouterConf} ref="router">
        <div className={cls} ref="views"> {children} </div>
      </Router>
    );
  }
}
