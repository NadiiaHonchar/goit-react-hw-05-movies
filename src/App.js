import { Route, Routes } from "react-router-dom";
import React, {createContext} from "react";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
// import { createContext } from "react";
// import {AutheProvider} from './pages/MoviesPage';

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));

export const NameContext = createContext();

export default function App() {
  return (
    <>
    <NameContext.Provider value={'cat'}>
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </NameContext.Provider>
    </>
  );
}
