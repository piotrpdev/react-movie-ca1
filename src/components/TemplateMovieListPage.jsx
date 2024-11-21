import Grid from "@mui/material/Grid2";
import { useState } from "react";

import FilterCard from "./FilterMoviesCard";
import Header from "./HeaderMovieList";
import MovieList from "./MovieList";

function MovieListPageTemplate({ movies, title, action }) {
  const currentYear = new Date().getFullYear();

  const [nameFilter, setNameFilter] = useState("");
  const [overviewFilter, setOverviewFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState([1895, currentYear]);
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return (
        m.overview.toLowerCase().search(overviewFilter.toLowerCase()) !== -1
      );
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return languageFilter !== "all"
        ? m.original_language === languageFilter
        : true;
    })
    .filter((m) => {
      const release_year = m.release_date.split("-")[0];
      return release_year >= yearFilter[0] && release_year <= yearFilter[1];
    });

  const handleChange = (type, value) => {
    switch (type) {
      case "name":
        setNameFilter(value);
        break;
      case "overview":
        setOverviewFilter(value);
        break;
      case "genre":
        setGenreFilter(value);
        break;
      case "language":
        setLanguageFilter(value);
        break;
      case "year":
        setYearFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            languageFilter={languageFilter}
            overviewFilter={overviewFilter}
            yearFilter={yearFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
