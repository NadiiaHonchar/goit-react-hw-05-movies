import { useState, useEffect } from "react";
import GetRequest from "../components/GetRequest";
import Button from "../components/Button";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(() => []);
  const query = "trending/all/day";
  const get = `page=${page}`
  const newResults = GetRequest(query, get);
  console.log('newResults',newResults);
  
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
            <li key={id}>{original_title || original_name}</li>
          ))}
      </ul>
      <Button onLoadMore={onLoadMore} />
    </>
  );
}
