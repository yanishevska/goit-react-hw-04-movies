import axios from 'axios';

const API_KEY = 'ea6ff4a2a64bb12db1e0ce6f81b745f4';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;


 const fetchTrendsMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}`);
    return results;
  } catch (error) {
    console.log(error);
  }
  
};


const fetchSearchMovies = async query => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    return results;
  } catch (error) {
    console.log(error);
  };
};

const fetchDetailsMovies = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const fetchCastMovies = async movieId => {
  try {
    const results = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return results.data.cast;
  } catch (error) {
    console.log(error);
  } 
};
const fetchReviewsMovies = async (movieId) => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
   console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  } 
};


const API = {
  fetchSearchMovies,
  fetchTrendsMovies,
  fetchDetailsMovies,
  fetchCastMovies,
  fetchReviewsMovies,
};
export default API;

