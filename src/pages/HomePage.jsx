import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from "../components/CardIcons/AddToFavorites";
import Spinner from "../components/Spinner";
import PageTemplate from "../components/TemplateMovieListPage";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["discover", { page }],
    queryFn: getMovies,
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
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
      page={page}
      setPage={setPage}
      totalPages={data.total_pages}
    />
  );
};
export default HomePage;
