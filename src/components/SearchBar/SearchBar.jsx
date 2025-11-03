import styles from './SearchBar.module.css';

import { useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  function handleTermChange({ target }) {
    setTerm(target.value);
    newSearch();
  };

  function handleClear() {
    setTerm("");
  };


  function keyUp(event) {
    if (event.key === "Enter") {
      props.onSearch(term);
      handleClear();
    }
  };

  function newSearch(e) {
    if (term) {
      props.onSearch(term);
      e.preventDefault();
    }
  };

 


  return (
    <div className={styles.searchBar}>
      <input
        placeholder="Search for a cocktail"
        onChange={handleTermChange}
        onKeyUp={keyUp}
        required
        value={term}
        id="input"
        className={styles.searchinput}
      />
      <button id='button' type="button" className={styles.searchbutton} onClick={newSearch} >
        SEARCH
      </button>
      
    </div>
  );
}





export default SearchBar;