import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import API from "../../services/MovieAPI";
import default_profile from '../../images/default_profile.jpg';
import s from './Cast.module.css';

 function Cast() {
     const [casts, setCasts] = useState([]);
     const { movieId } = useParams();

    useEffect(() => {
        API.fetchCastMovies(movieId).then(setCasts);
    }, [movieId]);

    return (
        <>
            {casts && casts.length > 0 ? (
                <ul className={s.castList}>
                {casts.map(cast =>
                    <li className={s.castItem} key={cast.id}>
                        <img className={s.profileImg} src={cast.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                            : default_profile} alt={cast.name}  />
                        <p className={s.castName}>{cast.name}</p>
                        <p className={s.castCharacter}>Character:
                            <span className={s.castCharacterSpan}>
                                {cast.character}
                            </span>
                        </p>
                    </li>
                )}
                </ul>
            ) : (
                <p>We have no information about the cast.</p>)}
        </>
    )
};
export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};