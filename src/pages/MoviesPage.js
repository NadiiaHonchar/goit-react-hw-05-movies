import { Link} from "react-router-dom";
import SearchBar from "../components/SearchBar";
import GetRequest from "../components/GetRequest";
import Button from "../components/Button";
import { useState, useEffect } from "react";

export default function MoviesPage() {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(() => []);  

  const query = `search/movie`;
  const get = searchName ? `query=${searchName}&page=${page}` : "";
  const typeQuery = "general";
  const newResults = GetRequest(query, get, typeQuery);

  useEffect(() => {
    setResults((prevResults) => [...prevResults, ...newResults]);
  }, [newResults]);

  const addSearchName = (searchName) => {
    setResults([]);
    setSearchName(searchName);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={addSearchName} />
      <ul>
        {results &&
          results.map(({ original_title, id, original_name }) => (
            <Link key={id} to={`/movies/${id}`}>
              <li>{original_title || original_name}</li>
            </Link>
          ))}
      </ul>
      {searchName && <Button onLoadMore={onLoadMore} text="Load more" />}      
    </>
  );
}
