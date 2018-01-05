import React, {Component, Children, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


/**
* ListGroup
* Properties: className, style
* Event Properties: null
*/

export default class ListGroup extends Component {

  static uiName = 'ListGroup'

  static propTypes = {
    title: PropTypes.string
  }

  static childContextTypes = {
    currentActiveKey: PropTypes.string,
  }

  state = {
    activeKey: ''
  }

  getChildContext(){
    return {currentActiveKey: this.state.activeKey};
  }

  render() {
    const {
      title,
      className,
      children,
      ...rest
    } = this.props;

    return (
      <ul className={className}>
        {title && <li className="list-group-title">{title}</li>}
        {Children.map(children, (c, i)=>{
          if(isValidElement(c) && c.type.uiName === 'ListItem'){
            return cloneElement(c, { itemKey: '.'+ i, group: this, ...rest });
          }
          return c;
        })}
      </ul>
    );
  }
}
