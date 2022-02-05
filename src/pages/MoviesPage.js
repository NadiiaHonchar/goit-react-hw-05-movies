




import SearchBar from "../components/SearchBar"
import GetRequest from "../components/GetRequest";
import Button from "../components/Button";
import { useState, useEffect } from "react";
export default function MoviesPage(){
    const [searchName, setSearchName] = useState("");
    const [page, setPage] = useState(1);
  const [results, setResults] = useState(() => []);

  const query = `search/movie/`;
  const get =`query=${searchName}&page=${page}`;
  const newResults = GetRequest(query, get);
  console.log('newResults',newResults);


  useEffect(() => {
    setResults((prevResults) => [...prevResults, ...newResults]);
  }, [newResults]);

//   const [newResults, setNewResults] = useState(() => []);

// if (searchName !== "")
//   {const query = searchName&&`search/${searchName}`;
//   GetRequest(query, page);
// }
//   console.log ('query',query);
//   let newResults =[];
//   const newResults=searchName&&GetRequest(query, page);

  
  
  const addSearchName = (searchName) => {
      // setPage(1);
      // setDateResponse([{ id: null, webformatURL: null, largeImageURL: null }]);
      setSearchName(searchName);
    //   newResults=GetRequest(`search/${searchName}`, page)
    //   setNewResults(GetRequest(`search/${searchName}`, page))
    // const newResults = GetRequest(`search/${searchName}`, page);

    };
// let newResults = [];
// console.log(newResults)
//     if (searchName !== ""){
//         // const query = searchName&&`search/${searchName}`;
//     GetRequest(`search/${searchName}`, page);
// console.log(newResults)}
    // useEffect(() => {
    //     if(!searchName){return}

        
    //   setResults((prevResults) => [...prevResults, ...newResults]);
    // }, [searchName]);
    // console.log(results);
    const onLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
      };

    return(
        <>
        
        <SearchBar onSubmit={addSearchName}/>
        
      <ul>
        {results && results.map(({ original_title, id, original_name }) => (
            <li key={id}>{original_title || original_name}</li>
          ))}
      </ul>
      {searchName && <Button onLoadMore={onLoadMore} />}
        </>
    )
}