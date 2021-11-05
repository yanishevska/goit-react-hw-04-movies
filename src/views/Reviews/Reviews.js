import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/MovieAPI";
import s from './Reviews.module.css';

 function Review() {
     const [reviews, setReview] = useState([]);
     const { movieId } = useParams();

    useEffect(() => {
        API.fetchReviewsMovies(movieId).then(setReview);
    }, [movieId]);

    return (
        <>
            {reviews && reviews.length > 0 ? (<ul>
                {reviews.map(review =>
                    <li className={s.itemReview} key={review.id}>
                        <p className={s.itemReviewAuth}>{review.author}</p>
                        <p className={s.itemReviewContent}>{ review.content}</p>
                       
                    </li>
                )}
            </ul>
            ) : (
                <p>We have no reviews yet.</p>
            )}
        </>
    )
};
export default Review;