import { Route, Switch } from 'react-router-dom';
import { Counter } from './Counter/Counter';
import { MovieDetails } from './Movies/MovieDetails';
import { MovieList } from './Movies/MovieList';
import { Nav } from './shared/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={() => <h1>Homepage</h1>} />
        <Route path="/counter" component={Counter} />
        <Route exact path="/movies" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </>
  );
}

export default App;
