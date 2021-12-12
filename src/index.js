import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MustwatchMoviesPage from "./pages/mustWatchMoviesPage"; 
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import PopularPeoplePage from './pages/popularPeoplePage';
import PeopleDetailsPage from './pages/peopleDetailsPage'
import PopularMoviesPage from './pages/popularMoviesPage';
import SignUpPage from "./pages/signUpPage";
import LogInPage from "./pages/logInPage";
import "bootstrap/dist/css/bootstrap.min.css"
import { makeStyles } from "@material-ui/core/styles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1,
      refetchInterval: 1, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
          <Switch>
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/logIn" component={LogInPage} />
        <Route path="/people/:id" component={PeopleDetailsPage} />
        <Route path="/similar/:id" component={SimilarMoviesPage} />
        <Route exact path="/movies/popular" component={PopularMoviesPage} />
        <Route exact path="/popular/people" component={PopularPeoplePage} />
        <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
        <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
        <Route exact path="/movies/mustwatch" component={MustwatchMoviesPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));