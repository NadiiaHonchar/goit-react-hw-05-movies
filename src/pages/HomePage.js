import { useState, useEffect } from "react";
import GetRequest from "../components/GetRequest";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(() => []);
  const query = "trending/all/day";
  const get = `page=${page}`;
  const typeQuery = "general";
  const newResults = GetRequest(query, get, typeQuery);

  useEffect(() => {
    setResults((prevResults) => [...prevResults, ...newResults]);
  }, [newResults]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h2>Popular movies of the day</h2>
      <ul>
        {results &&
          results.map(({ original_title, id, original_name }) => (
            <Link key={id} to={`/movies/${id}`}>
              <li>{original_title || original_name}</li>
            </Link>
          ))}
      </ul>
      <Button onLoadMore={onLoadMore} text="Load more" />
    </>
  );
}
