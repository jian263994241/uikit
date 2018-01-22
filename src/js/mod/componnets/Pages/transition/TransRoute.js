import React, {Component, createElement} from 'react';
import Route from 'react-router-dom/Route';

const TransRoute = ({component, style, ...props}) => (
  <Route {...props} render={props => createElement(component, {style, ...props})} />
);

export default TransRoute;
