import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class ListButton extends Component {

  static uiName = 'ListButton'

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    component: 'a'
  }

  render() {

    const {
      className,
      component,
      itemKey,
      group,
      children,
      ...rest
    } = this.props;

    const cls = classnames('item-link', 'list-button', className);

    const Element = component;

    return (
      <li>
        <Element className={cls} to={link} {...rest}>{children}</Element>
      </li>
    );
  }

}
