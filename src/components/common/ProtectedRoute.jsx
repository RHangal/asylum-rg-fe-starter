import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { LandingPage } from '../pages/Landing';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <LandingPage />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
