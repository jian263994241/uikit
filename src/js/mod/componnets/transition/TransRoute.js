import React, {Component, createElement} from 'react';

export default const TransRoute = ({component, style, ...props}) => (
  <Route {...props} render={props => React.createElement(component, {style, ...props})} />
);
