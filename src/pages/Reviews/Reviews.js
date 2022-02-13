import { useParams } from "react-router-dom";
import GetRequest from "../../components/GetRequest";
import { useState, useEffect } from "react";

export default function Reviews() {
  const { id: queryId } = useParams();
  const [results, setResults] = useState(() => []);
  const [totalResults, setTotalResults] = useState(0);
  const query = queryId ? `movie/${queryId}/reviews` : "";
  const get = 1;
  const typeQuery = "details";
  const newResults = GetRequest(query, get, typeQuery);

  useEffect(() => {
    setResults(newResults.results);
    setTotalResults(newResults.total_results);
  }, [newResults]);


  return (
    <>
      <div>
        {totalResults===0 && <h3>We don't have any reviews for this movie.</h3>}
        {results &&
          results.map(({ author, content, id }) => (
            <div key={id}>
              <h3>Autor: {author}</h3>
              <p>{content}</p>
            </div>
          )) }
      </div>
    </>
  );
}
