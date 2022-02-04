import { Router, Route, Link, Routes } from "react-router-dom";

import  HomePage  from "./pages/HomePage";
import  MoviesPage  from "./pages/MoviesPage";
import Layout from "./components/Layout";
// import GetRequest from './components/GetRequest'
// import {NotFoundPage} from './pages/NotFoundPage';

// const IPI_KEY =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI1Mjk2NmIxNzEwNjk4MmI1ZmFhZjhmYTY1NWIzYiIsInN1YiI6IjYxZjliMDNjNWMzMjQ3MDA0NTRlNDI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cwsCflzdAcLSiwpn5shAUOjzcnGC1PhUyUbQP-Hw9V0";
// const query = 'trending/all/day';
// const page = 1;

export default function App() {
  return (
    <>
      {/* <header>
            <Link to="/">Home</Link>
            <Link  to="/movies">Movies</Link>
        </header> */}
      <Routes>
          <Route path = "/" element = {<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="*" element={<HomePage />} />
            {/* {GetRequest(query,page)} */}
        </Route>
      </Routes>
    </>
  );
}
