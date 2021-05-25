import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

export function PrivateRoute({ children, component, ...rest }) {
  const { userProfile } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userProfile?.email ? (
          children || component
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
