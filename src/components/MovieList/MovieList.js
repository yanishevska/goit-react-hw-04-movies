import PropTypes from 'prop-types';
import default_poster from '../../images/default_poster.jpg';
import { Link,useLocation} from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList({movies}) {
    const location = useLocation();
    

    return (
        <>
        <ul className={s.trendsList}>
        {movies && movies.map(movie =>
        <li key={movie.id} className={s.itemTrends}>
                <Link
                    key={movie.id}
                    to={{
                    pathname: `movies/${movie.id}`,
                    state: {
                    from:location,
                },}} >
            <img className={s.posterTrends} src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : default_poster} alt='poster' width='200' height='300'/>
                <h2 className={s.titleTrends}>{movie.original_title}</h2>
                
                </Link>
            </li>
          )}
   
          </ul>
        </>
    )
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};