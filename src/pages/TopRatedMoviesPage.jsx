import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getTopRatedMovies } from "../api/tmdb-api";
import AddToToWatchListIcon from "../components/CardIcons/AddToToWatchList";
import Spinner from "../components/Spinner";
import PageTemplate from "../components/TemplateMovieListPage";

const TopRatedMoviesPage = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["top-rated", { page }],
    queryFn: getTopRatedMovies,
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
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToToWatchListIcon movie={movie} />;
      }}
      page={page}
      setPage={setPage}
      totalPages={data.total_pages}
    />
  );
};
export default TopRatedMoviesPage;
