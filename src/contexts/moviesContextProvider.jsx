import { useState } from "react";
import { MoviesContext } from "./moviesContext";

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [myReviews, setMyReviews] = useState({});

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };
  //console.log(myReviews);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };

  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addToToWatchMovies = (movie) => {
    let newToWatchMovies = [];
    if (!toWatchMovies.includes(movie.id)) {
      newToWatchMovies = [...toWatchMovies, movie.id];
    } else {
      newToWatchMovies = [...toWatchMovies];
    }
    setToWatchMovies(newToWatchMovies);
  };

  // We will use this function in the next step
  const removeFromToWatchMovies = (movie) => {
    setToWatchMovies(toWatchMovies.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        toWatchMovies,
        addToToWatchMovies,
        removeFromToWatchMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
