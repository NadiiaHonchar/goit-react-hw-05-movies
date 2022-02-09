import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const API_KEY = "69b52966b17106982b5faaf8fa655b3b";
const GetRequest = (query, get, typeQuery) => {
  const [dateResponse, setDateResponse] = useState(() => []);

  useEffect(() => {
    if (!query || !get) {
      return;
    }
    async function getUser() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${query}?api_key=${API_KEY}&${get}`
        );
        if (typeQuery === "general") {
          setDateResponse(response.data.results);
        }
        if (typeQuery === "details") {
          setDateResponse(response.data);
        }
      } catch (error) {
        return toast(
          `Sorry, an error ${error} has occurred. Please try again.`
        );
      }
    }
    getUser();
  }, [query, get, typeQuery]);

  return dateResponse;
};

export default GetRequest;

GetRequest.propTypes = {
  query: PropTypes.string.isRequired,
  get: PropTypes.string.isRequired,
  typeQuery: PropTypes.string.isRequired,
};
