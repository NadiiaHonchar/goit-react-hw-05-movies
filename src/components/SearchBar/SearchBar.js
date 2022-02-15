import { useState } from "react";
import PropTypes from "prop-types";
import { ImSearch } from "react-icons/im";
import style from "./SearchBar.module.css";

export default function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (e) => {
    const enteredName = e.currentTarget.value.toLowerCase();
    setSearchName(enteredName);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchName.trim() === "") {
      alert("please enter a request name");
      return;
    }
    onSubmit(searchName);
    reset();
  };

  const reset = () => {
    setSearchName("");
  };

  return (
    <>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          {" "}
          <ImSearch />
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Enter movie name"
          value={searchName}
          onChange={handleInputChange}
        />
      </form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
