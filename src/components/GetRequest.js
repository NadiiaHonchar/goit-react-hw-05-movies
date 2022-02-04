import { useEffect, useState } from "react";
import axios from "axios";
// import Loader from "./components/Loader";

// const API_KEY =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWI1Mjk2NmIxNzEwNjk4MmI1ZmFhZjhmYTY1NWIzYiIsInN1YiI6IjYxZjliMDNjNWMzMjQ3MDA0NTRlNDI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cwsCflzdAcLSiwpn5shAUOjzcnGC1PhUyUbQP-Hw9V0";
const API_KEY ='69b52966b17106982b5faaf8fa655b3b';
  const GetRequest =(query, page)=>{
    // console.log('try',query);
    // const [loading, setLoading] = useState(false);
    const [error,setError] = useState('');
    const [dateResponse, setDateResponse] = useState(() => []);

    useEffect(async () => {
        // if (searchName === "") {
        //   return;
        // }
        // setLoading(true);
        try {
          const response = await axios.get(
            // `https://pixabay.com/api/?key=${API_KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
            `https://api.themoviedb.org/3/${query}?api_key=${API_KEY}&page=${page}`
            // `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`

          );
          // console.log('try',query);
          setDateResponse(response.data.results);
        //   if (response.data.total === 0 || response.data.hits.length < 1) {
        //     return toast(
        //       "Sorry, there are no images matching your search query. Please try again."
        //     );
        //   }
        //   if (!dateResponse[0].id) {
        //     const firstList = response.data.hits.map((item) => ({
        //       id: item.id,
        //       webformatURL: item.webformatURL,
        //       largeImageURL: item.largeImageURL,
        //     }));
        //     setDateResponse(firstList);
        //   }
        //   if (dateResponse[0].id) {
        //     const nextList = response.data.hits.map((item) => ({
        //       id: item.id,
        //       webformatURL: item.webformatURL,
        //       largeImageURL: item.largeImageURL,
        //     }));
        //     setDateResponse((prev) => [...prev, ...nextList]);
        //   }
        } catch (error) {
          setError(error);
        } finally {
            // console.log(response);
        //   setLoading(false);
        }
        
    //   }, [searchName, page]);
    }, [query, page]);
    // console.log('dateResponse',dateResponse)
    return dateResponse;

}

export default GetRequest;