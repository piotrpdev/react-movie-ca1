import { useQuery } from "@tanstack/react-query";

import { getTrendingMovies } from "../api/tmdb-api";
import AddToToWatchListIcon from "../components/CardIcons/AddToToWatchList";
import Spinner from "../components/Spinner";
import PageTemplate from "../components/TemplateMovieListPage";

const TrendingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingMovies,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToToWatchListIcon movie={movie} />;
      }}
    />
  );
};
export default TrendingMoviesPage;
