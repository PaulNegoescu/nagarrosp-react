import { Route, Switch } from 'react-router-dom';
import { Counter } from './Counter/Counter';
import { MovieDetails } from './Movies/MovieDetails';
import { MovieList } from './Movies/MovieList';
import { Nav } from './shared/Nav/Nav';
import { AuthContextProvider } from './Auth/AuthContext';
import { PrivateRoute } from './shared/PrivateRoute';
import { Auth } from './Auth/Auth';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <h1>Homepage</h1>} />
          <Route path="/login" component={Auth} />
          <Route path="/register" component={Auth} />
          <PrivateRoute path="/counter" component={Counter} />
          <Route exact path="/movies" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
      </AuthContextProvider>
    </>
  );
}

export default App;
