import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

import { getGenres, getLanguages } from "../api/tmdb-api";
import img from "../images/pexels-dziana-hasanbekava-5480827.jpg";
import Spinner from "./Spinner";

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterMoviesCard(props) {
  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const languagesQuery = useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });

  if (genresQuery.isLoading || languagesQuery.isLoading) {
    return <Spinner />;
  }

  if (genresQuery.isError) {
    return <h1>{genresQuery.error.message}</h1>;
  }

  if (languagesQuery.isError) {
    return <h1>{languagesQuery.error.message}</h1>;
  }

  const currentYear = new Date().getFullYear();

  const genres = genresQuery.data.genres;
  const _languages = languagesQuery.data;
  const languages = [{ iso_639_1: "all", english_name: "All" }, ..._languages];

  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  const handleOverviewChange = (e) => {
    handleChange(e, "overview", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleLanguageChange = (e) => {
    handleChange(e, "language", e.target.value);
  };

  const handleYearChange = (e) => {
    handleChange(e, "year", e.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgb(204, 204, 0)",
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search title"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search overview"
          type="search"
          variant="filled"
          value={props.overviewFilter}
          onChange={handleOverviewChange}
        />
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="og-language-label">Original Language</InputLabel>
          <Select
            labelId="og-language-label"
            id="og-language-select"
            defaultValue=""
            value={props.languageFilter}
            onChange={handleLanguageChange}
          >
            {languages.map((language) => {
              return (
                <MenuItem key={language.iso_639_1} value={language.iso_639_1}>
                  {language.english_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="year-label">Release Year</InputLabel>
          <Slider
            aria-labelledby="year-label"
            id="year-slider"
            value={props.yearFilter}
            onChange={handleYearChange}
            min={1895}
            max={currentYear}
            valueLabelDisplay="auto"
            disableSwap
          />
        </FormControl>
      </CardContent>
      <CardMedia sx={{ height: 300 }} image={img} title="Filter" />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
