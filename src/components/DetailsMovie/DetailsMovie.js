import default_poster from '../../images/default_poster.jpg';
import PropTypes from 'prop-types';
import s from './DetailsMovie.module.css';

function DetailsMovie({movie}) {
    return (
         <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`}} className={s.aboutCard}>
           <div style={{ background: 'linear-gradient(to right, rgba(8.24%, 5.49%, 5.10%, 1.00) 150px, rgba(8.24%, 5.49%, 5.10%, 0.84) 100%)'}} className={s.test}>
            <img className={s.poster} src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : default_poster} alt='poster' width='200'/>
                 
               <div className={s.textBox}>
                    <h1 className={s.titleMovie}>{movie.original_title}</h1>
                       <p className={s.aboutTitle}>Genres:</p> 
                <ul className={s.aboutList}>{movie.genres && movie.genres.map(genre =>
                    <li className={s.aboutText} key={genre.id}>{genre.name}</li>)}</ul>
            <p className={s.aboutTitle}>User Score: <span className={s.aboutText}>{movie.vote_average * 10}%</span></p>
            <p className={s.aboutTitle}>Overview</p>
                        <span className={s.aboutTextOverview}>{movie.overview}</span>
                    </div>
                    </div>
                    
                </div>
    )
    
}
export default DetailsMovie;

 DetailsMovie.propTypes = {
  movie: PropTypes.object,
};