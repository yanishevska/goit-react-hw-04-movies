import { useEffect, useState,lazy,Suspense } from "react";
import { Route,useRouteMatch,useParams, NavLink, useLocation,useHistory  } from "react-router-dom";
import API from "../../services/MovieAPI";
import DetailsMovie from '../../components/DetailsMovie';
import s from './MovieDetailsPage.module.css';
import Loader from "react-loader-spinner";

const Cast = lazy(()=>import('../Cast'),);
const Reviews = lazy(() => import('../Reviews'),);

 function MovieDetailsPage() {
    const { url,path} = useRouteMatch();
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        API.fetchDetailsMovies(movieId).then(setMovie);
    },[movieId])

      const btnBack = () => {
    history.push(location?.state?.from ?? '/');
    };
    

    return (
        <div className={s.detailMovie}>
            <div className={s.btnBackBox}>
            <button className={s.btnBack} onClick={btnBack}>Back</button>
      </div>
        {movie && <>
                < DetailsMovie movie={movie}/>
                
            <div className={s.sectionInfo}>
                <h2 className={s.titleInfo}>Additional information</h2>
                <ul className={s.listInfo}>
                    <li>
                            <NavLink className={s.info}
                                activeClassName={s.activeInfo}
                                to={{
                                   pathname: `${url}/cast`,
                                   state: {from:location?.state?.from ?? '/movies'},
                                }}>
                                Cast
                            </NavLink>
                        </li>

                        <li >
                            <NavLink className={s.info}
                                 activeClassName={s.activeInfo}
                                to={{
                                   pathname: `${url}/reviews`,
                                   state: { from: location?.state?.from ?? '/movies' },     
                                }}>
                                Review
                            </NavLink>
                        </li>   
                    </ul>
            </div>
                    <Suspense fallback={<Loader/>}>
                           <Route path={`${path}/cast`}>
             <Cast />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
                    </Suspense>
        </>     
    }
    </div>
    )
    
}
export default MovieDetailsPage;