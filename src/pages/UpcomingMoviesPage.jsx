import { useQuery } from "@tanstack/react-query";

import { getUpcomingMovies } from "../api/tmdb-api";
import AddToToWatchListIcon from "../components/CardIcons/AddToToWatchList";
import Spinner from "../components/Spinner";
import PageTemplate from "../components/TemplateMovieListPage";

const UpcomingMovesPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcomingMovies,
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
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToToWatchListIcon movie={movie} />;
      }}
    />
  );
};
export default UpcomingMovesPage;
