import { useParams } from "react-router-dom";
import GetRequest from "../../components/GetRequest";
import { useState, useEffect } from "react";

export default function Reviews() {
  const { id: queryId } = useParams();
  const [results, setResults] = useState(() => []);
  const query = queryId ? `movie/${queryId}/reviews` : "";
  const get = 1;
  const typeQuery = "details";
  const newResults = GetRequest(query, get, typeQuery);
  // const imageURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    setResults(newResults.results);
  }, [newResults]);

  return (
    <>
      <div>
        {!results && <p>We don't have any reviews for this movie.</p>}
        {results &&
          results.map(({ author, content, id }) => (
            <div key={id}>
              <h3>Autor: {author}</h3>
              <p>{content}</p>
            </div>
          ))}
      </div>
    </>
  );
}
