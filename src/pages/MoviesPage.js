import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import GetRequest from "../components/GetRequest";
import Button from "../components/Button";
import React, { useState, useEffect} from "react";

// import { Context } from "../components/context";

// const codeName ='';
// const nameProvider='';
// export const NameContext = createContext();
export default function MoviesPage() {
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(() => []);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = `search/movie`;
  const get = searchName ? `query=${searchName}&page=${page}` : "";
  const typeQuery = "general";
  const newResults = GetRequest(query, get, typeQuery);
  
 
  useEffect(() => {
    setResults((prevResults) => [...prevResults, ...newResults]);
  }, [newResults]);
  
  const addSearchName = (searchName) => {
    setResults([]);
    setSearchParams({ query: searchName });
    setSearchName(searchName);
    // AutheProvider(searchName);
    // const nameProvider = React.createContext(searchName);
    // eddContext(nameProvider);
    
  };

  
  const queryName = searchParams.get("query");
  useEffect(() => queryName && setSearchName(queryName), [queryName]);
  
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
  return (
    <>    
    {/* <NameContext.Provider value ={searchName} > */}
      <SearchBar onSubmit={addSearchName} />
      <ul>
        {results &&
          results.map(({ original_title, id, original_name }) => (
            <Link key={id} to={`/movies/${id}`} >
              <li>{original_title || original_name}</li>
            </Link>
          ))}
      </ul>
      {searchName && <Button onLoadMore={onLoadMore} text="Load more" />}    
    {/* </NameContext.Provider> */}
    </>
  );  
}

// export function eddContext(nameProvider){ return nameProvider};


// export {nameProvider};
// function AutheProvider({name, children}){
  
  //   return (
//     <Context.AutheProvider value={name}>{children}</Context.AutheProvider>
//   )
// } 
// export {AutheProvider};