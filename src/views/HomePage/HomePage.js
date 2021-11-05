import { useState, useEffect,lazy,Suspense } from 'react';
import API from '../../services/MovieAPI';
import MovieList from '../../components/MovieList/MovieList';
import { Route, Switch } from 'react-router';
import Loader from 'react-loader-spinner';

const MovieDetailsPage = lazy(() => import('../MovieDetailsPage'));

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendsMovies().then(setMovies);
  }, []);


  return (
    <Suspense fallBack={<Loader/>}>
    <Switch>
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route exact path="/" render={() => <MovieList movies={movies} />}/>
      </Switch>
      </Suspense>
     )
}
 
export default HomePage;