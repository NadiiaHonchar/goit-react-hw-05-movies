import { useState, useEffect } from "react";
import GetRequest from "../components/GetRequest";
import Button from "../components/Button";

export default function HomePage(){
    const [page,setPage] = useState(1);
    const [results,setResults] = useState(()=>[]);

    const query = 'trending/all/day';
    const onLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    // setResults((prevResults)=>[...prevResults, newResults]);
    // console.log('Result',results);
    const newResults = GetRequest(query,page);
    // results&&setResults(newResults);
    console.log('newResults',newResults)
    useEffect(()=>{
        // setResults(newResults);
        if(!results[0]){setResults(newResults); return;}
        setResults((prevResults)=>[...prevResults, ...newResults]);

    },[query,page] )


    // const results = GetRequest(query,page);
    console.log('Result',results);

    return(
        <>
        <h2>Popular movies of the day</h2>
        {/* {console.log('homePage',results)} */}
        <ul>
        {results&&results.map(({original_title,id,original_name})=>(<li key = {id}>{original_title||original_name}</li>))}
        
        </ul>
        <Button onLoadMore={onLoadMore}/>
</>
    )
}