import { useParams, useNavigate, Route, Routes, Link } from "react-router-dom";
import GetRequest from "../../components/GetRequest";
import React, { useState, useEffect, useContext } from "react";
import Button from "../../components/Button";
import style from "./MovieDetailsPage.module.css";
import { NameContext } from "../../App";
const Cast = React.lazy(() => import("../Cast"));
const Reviews = React.lazy(() => import("../Reviews"));

export default function MovieDetailsPage() {
  const { id: queryId } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState(() => []);
  const [genres, setGenres] = useState(() => []);
  const query = queryId ? `movie/${queryId}` : "";
  const get = 1;
  const typeQuery = "details";
  const searchName = useContext(NameContext);

  const nav = searchName ? `/movies?query=${searchName}` : "/";
  const onLoadMore = () => navigate(nav);

  const newResults = GetRequest(query, get, typeQuery);
  const { original_title, original_name, popularity, overview, backdrop_path } =
    results;
  const imageURL = "https://image.tmdb.org/t/p/w500";
  const posterUrl = backdrop_path ? `${imageURL}${backdrop_path}` : "";

  useEffect(() => {
    setResults(newResults);
    setGenres(newResults.genres);
  }, [newResults]);

  return (
    <>
      {<Button onLoadMore={onLoadMore} text="Go back" />}
      <div className={style.card}>
        <div>
          <img
            className={style.image}
            src={posterUrl}
            alt={original_title || original_name}
          />
        </div>
        <div className={style.cardText}>
          <h2>{original_title || original_name}</h2>
          <p>User Score: {popularity}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div className={style.cardTextAddInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link className={style.cardLink} to={`${queryId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={style.cardLink} to={`${queryId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>

        <Routes>
          <Route
            path=":id/cast"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <Cast />
              </React.Suspense>
            }
          />
          <Route
            path=":id/reviews"
            element={
              <React.Suspense fallback={<h1>Loading User Route</h1>}>
                <Reviews />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}
