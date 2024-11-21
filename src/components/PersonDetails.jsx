import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { excerpt } from "../util";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ personDetails }) => {
  // Don't miss this!
  const [bioLong, setBioLong] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      {bioLong ? (
        <Typography variant="h6" component="p">
          {personDetails.biography}
          <Button size="small" onClick={() => setBioLong(false)}>
            Read Less
          </Button>
        </Typography>
      ) : (
        <Typography variant="h6" component="p">
          {excerpt(personDetails.biography)}
          <Button size="small" onClick={() => setBioLong(true)}>
            Read More
          </Button>
        </Typography>
      )}

      {/* <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {person.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${person.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${person.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${person.vote_average} (${person.vote_count}`}
        />
        <Chip label={`Released: ${person.release_date}`} />
      </Paper>
      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
        </li>
        {person.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer> */}
    </>
  );
};
export default PersonDetails;
