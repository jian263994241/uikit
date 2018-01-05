import React, {Component, createElement} from 'react';
import Route from 'react-router-dom/Route';
import matchPath from 'react-router-dom/matchPath';
import RouteTransition from './RouteTransition';
import TransRoute from './TransRoute';

function getKey({ pathname }, path, exact) {
  return matchPath(pathname, { exact, path }) ? 'match' : 'no-match';
}

const AnimatedRoute = ({ component, path, exact, ...routeTransitionProps }) => (
  <Route
    render={({ location, match }) => (
      <RouteTransition {...routeTransitionProps}>
        <TransRoute
          key={getKey(location, path, exact)}
          path={path}
          exact={exact}
          location={location}
          component={component}
        />
      </RouteTransition>
    )}
  />
);


export default AnimatedRoute;
