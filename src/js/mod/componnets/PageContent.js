import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import $ from 'dom7';
import {initPullToRefresh} from '../utils/pull-to-refresh'


export default class PageContent extends Component {

  static uiName = 'PageContent'

  static propTypes = {
    withSubnavbar: PropTypes.bool,
    pullToRefresh: PropTypes.bool,
    infiniteScroll: PropTypes.bool,
    infiniteScrollPreloader: PropTypes.bool,
    className: PropTypes.string,
    onRefresh: PropTypes.func,
    onInfinite: PropTypes.func,
    pullToRefreshDistance: PropTypes.number,
    waiting: PropTypes.bool
  }

  componentDidMount() {
    const {pullToRefresh, onRefresh} = this.props;
    this._mounted = true;
    if(pullToRefresh){
      initPullToRefresh(this.refs.wrapper, onRefresh);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  state = {
    showInfiniteScrollPreloader: false
  }

  infiniteIgnore = false

  handleInfiniteScroll = (e)=>{
    const {onInfinite, pullToRefreshDistance, infiniteScrollPreloader} = this.props;
    if(!onInfinite) return ;

    let inf = $(e.target);
    let scrollTop = inf[0].scrollTop;
    let scrollHeight = inf[0].scrollHeight;
    let height = inf[0].offsetHeight;
    let virtualListContainer = inf.find('.virtual-list');
    let virtualList;

    if(this.infiniteIgnore) return ;

    let onTop = inf.hasClass('infinite-scroll-top');
    let distance = pullToRefreshDistance || 50;
    if (typeof distance === 'string' && distance.indexOf('%') >= 0) {
        distance = parseInt(distance, 10) / 100 * height;
    }

    if (distance > height) distance = height;

    const done = ()=>{
      if(this._mounted){
        this.setState({
          showInfiniteScrollPreloader: false
        },()=>{
          setTimeout(()=>{
            this.infiniteIgnore = false;
          },100)
        });
      }
    };

    const showPreloader = ()=>{
      if(infiniteScrollPreloader){
        this.setState({
          showInfiniteScrollPreloader: true
        });
      }
    };

    if (onTop) {
        if (scrollTop < distance) {
            inf.trigger('infinite');
            this.infiniteIgnore = true;
            showPreloader();
            onInfinite(done);
        }
    }
    else {
        if (scrollTop + height >= scrollHeight - distance) {
            if (virtualListContainer.length > 0) {
                virtualList = virtualListContainer.eq(-1)[0].f7VirtualList;
                if (virtualList && !virtualList.reachEnd && !virtualList.params.updatableScroll) {
                    return;
                }
            }
            inf.trigger('infinite');
            this.infiniteIgnore = true;
            showPreloader();
            onInfinite(done);
        }
    }

  }

  render() {

    const {
      className,
      withSubnavbar,
      pullToRefresh,
      infiniteScroll,
      infiniteScrollPreloader,
      onRefresh,
      onInfinite,
      children,
      // onScroll,
      waiting,
      ...rest
    } = this.props;

    const {showInfiniteScrollPreloader} = this.state;

    let cls = classnames({
      'page-content': true,
      'with-subnavbar': withSubnavbar,
      'pull-to-refresh-content': pullToRefresh,
      'infinite-scroll': infiniteScroll
    }, className);

    if(waiting){
      return (
        <div className="page-content">
          <span className="progressbar-infinite"></span>
        </div>
      );
    }

    return (
      <div className={cls} {...rest} ref="wrapper">
        {
          pullToRefresh && (
            <div className="pull-to-refresh-layer">
              <div className="preloader"></div>
              <div className="pull-to-refresh-arrow"></div>
            </div>
          )
        }

{children}
        {
          showInfiniteScrollPreloader && (
            <div className="infinite-scroll-preloader">
              <div className="preloader"></div>
            </div>
          )
        }
      </div>
    );
  }

}
