import { useParams } from "react-router-dom";
import GetRequest from "../../components/GetRequest";
import { useState, useEffect } from "react";
import style from "./Cast.module.css";

export default function Cast() {
  const { id: queryId } = useParams();
  const [results, setResults] = useState(() => []);
  const query = queryId ? `movie/${queryId}/credits` : "";
  const get = 1;
  const typeQuery = "details";
  const newResults = GetRequest(query, get, typeQuery);
  const imageURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setResults(newResults.cast);
  }, [newResults]);

  return (
    <>
      <div className={style.actorsCard}>
        {!results && <p>We don't have any cast for this movie.</p>}
        {results &&
          results.map(
            ({ name, original_name, character, profile_path, id }) => (
              <div key={id} className={style.actorsList}>
                <img
                  className={style.image}
                  src={`${imageURL}${profile_path}`}
                  alt={name || original_name}
                />
                <p className={style.widthText}>{name || original_name}</p>
                <p className={style.widthText}>Character: {character}</p>
              </div>
            )
          )}
      </div>
    </>
  );
}
