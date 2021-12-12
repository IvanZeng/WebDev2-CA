// import React from "react";
import React, { useEffect, useState }  from "react";
import PageTemplate from "../components/templateMovieListPage";
import {getSimilarMovies} from '../api/tmdb-api'
import { withRouter } from "react-router-dom";

// const SimilarMoviesPage = (props) => {
//     const { id } = props.match.params;
//     const {  data, error, isLoading, isError }  = useQuery(
//       ["movie", { id: id }],
//       getSimilarMovies)
//        //'discover5', getSimilarMovies)
  
//     if (isLoading) {
//       return <Spinner />
//     }
  
//     if (isError) {
//       return <h1>{error.message}</h1>
//     }  
//     const movies = data.results;
  
//     // Redundant, but necessary to avoid app crashing.
//     // const favorites = movies.filter(m => m.favorite)
//     // localStorage.setItem('favorites', JSON.stringify(favorites))
//     // const addToFavorites = (movieId) => true 

//     return (
//       <PageTemplate
//         title="Similar Movies"
//         movies={movies}
//         action={(movie) => {
//           return <AddToFavoritesIcon movie={movie} />
//         }}
//       />
//   );
//   };
  
//   export default withRouter (SimilarMoviesPage);



const SimilarMoviesPage = props => {
  const { id } = props.match.params;
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title= {`Similar Movies`}
      movies={similarMovies}
      action={(movie) => {
      }}
    />
);
};

export default withRouter (SimilarMoviesPage);

// export default SimilarMoviesPage;
