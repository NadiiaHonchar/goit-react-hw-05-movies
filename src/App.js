import { Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));

export const NameContext = createContext();

export default function App() {
  const [searchNameContext, setSearchNameContext] = useState("");
  const [setValue, setSetValue] = useState(true);
  const changeSetValue = (setValue) => {
    setSearchNameContext("");
    setSetValue("false");
  };

  console.log(setValue);
  const addSearchNameContext = (searchName) => {
    setSearchNameContext(searchName);
  };

  return (
    <>
      <NameContext.Provider value={searchNameContext}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <React.Suspense fallback={<h1>Loading User Route</h1>}>
                  <HomePage changeSetValue={changeSetValue} />
                </React.Suspense>
              }
            />
            <Route
              path="movies/"
              element={
                <React.Suspense fallback={<h1>Loading User Route</h1>}>
                  <MoviesPage addSearchNameContext={addSearchNameContext} />
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
