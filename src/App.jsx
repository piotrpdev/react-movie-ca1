import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SiteHeader from "./components/SiteHeader";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import AddMovieReviewPage from "./pages/AddMovieReviewPage";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MovieDetailsPage";
import MovieReviewPage from "./pages/MovieReviewPage";
import PersonDetailsPage from "./pages/PersonDetailsPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import TrendingMoviesPage from "./pages/TrendingMoviesPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/trending" element={<TrendingMoviesPage />} />
            <Route path="/movies/top-rated" element={<TopRatedMoviesPage />} />
            <Route path="/person/:id" element={<PersonDetailsPage />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;