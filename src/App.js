import "./App.css";
import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from "./components/AppBar";
import Loader from "react-loader-spinner";

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "homePage" */));
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage' /* webpackChunkName: "MoviesPage" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);

function App() {

     return (
<Suspense fallback={<Loader/>}>
       <div>
         <AppBar />
         <Switch>
         <Route path="/" exact>
           <HomePage/>
         </Route>
         
          <Route path="/movies" exact>
           <MoviesPage/>
         </Route>

           <Route path="/movies/:movieId">
           <MovieDetailsPage/>
         </Route>

         <Route>
           <NotFoundView/>
         </Route>
         </Switch>
  
         </div>
         </Suspense>
    );
  }


export default App;

