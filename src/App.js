import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="movies/"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <MoviesPage />
              </React.Suspense>
            }
          />
          <Route
            path="movies/:id/*"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <MovieDetailsPage />
              </React.Suspense>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
