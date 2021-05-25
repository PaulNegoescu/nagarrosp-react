import { Redirect, Route, Switch } from "react-router-dom";
import { Counter } from "./Counter/Counter";
import { MovieDetails } from "./Movies/MovieDetails";
import { MovieList } from "./Movies/MovieList";
import { Nav } from "./shared/Nav/Nav";
import { AppContext } from "./context/AppContext";
import { useAuth } from "./hooks/useAuth";
import { useContext } from "react";

function App() {
  const { accessToken, userProfile } = useAuth();

  return (
    <>
      <AppContext.Provider value={{ accessToken, userProfile }}>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <h1>Homepage</h1>} />
          <PrivateRoute>
            <Route path="/counter" component={Counter} />
          </PrivateRoute>
          <Route exact path="/movies" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
      </AppContext.Provider>
    </>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { userProfile } = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userProfile?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/movies",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
