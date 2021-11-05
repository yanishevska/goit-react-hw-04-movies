import {useEffect, useState,lazy,Suspense } from "react";
import { Route, Switch, useRouteMatch, useHistory, useLocation, } from 'react-router-dom';
import queryString from 'query-string';
import s from './MoviesPage.module.css';
import { toast } from "react-toastify";
import API from "../../services/MovieAPI";
import Loader from "react-loader-spinner";
const  MovieList = lazy(() => import( '../../components/MovieList'),);
const MovieDetailsPage = lazy(()=>import('../MovieDetailsPage/'),);


function MoviesPage () {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const history = useHistory();
    const location = useLocation();
    const { path } = useRouteMatch();

    const handleNameChange = e => {
        const inputQuery = e.target.value;
        setQuery(inputQuery);
     
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            return toast.info("Input name movie!");
           
        }
      
    history.push({ ...location, search: `?query=${query}` });
        setQuery('');
      
    };
   
    useEffect(() => {
        const movie = queryString.parse(location.search).query;
       
        if (!movie) {
            setMovies([]);
        }

        if (movie) {
            API.fetchSearchMovies(movie).then(resp => setMovies(resp));
            setQuery('');
            
        }
    }, [location.search]);
    

    return (
            <Suspense fallback={<Loader/>}>
                  <Switch>
                     <Route path={`${path}/:movieId`} component={MovieDetailsPage} />
                    <Route exact path="/movies"
                        render={() => (
                            <>
                                  <header className={s.SearchMovie}>
                                  <form className={s.SearchForm} onSubmit={handleSubmit}>
                                        <button type="submit" className={s.SearchFormButton}>
                                            Search
                                     </button>
    
                    <input
                        value={query}
                        onChange={handleNameChange}
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                    />
                </form>
                   </header>
                  <>          
                        <MovieList movies={movies}/>
                </>
                </>
                    )}
             / >
      </Switch>
         </Suspense>
        )
}

export default MoviesPage;
