import styles from "./App.module.css";
import { useEffect, useState } from "react";
import cocktailDB from "./api";
import Drinks from "./components/Drinks/Drinks";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/Loading/Loading";
import SearchResults from "./components/Searchresults/SearchResults";
import FavouriteDrinks from "./components/Favourites/Favourites";
import ShowFavouritesButton from "./components/ShowFavouritesButton/ShowFavouritesButton";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState("true");
  const [showFavourites, setShowFavourites] = useState(false);

  async function search(term) {
    await cocktailDB.search(term).then((result) => setSearchResults(result));
    console.log(searchResults);
  }

  useEffect(() => {
    tenDrinksArray();
  }, []);

  useEffect(() => {
    getDrinkData();
  }, []);

  async function tenDrinksArray() {
    let drinksArray = [];

    for (let i = 0; i < 9; i++) {
      drinksArray.push(await cocktailDB.randomDrink([i]));
    }
    return drinksArray;
  }

  function getDrinkData() {
    tenDrinksArray()
      .then((data) => {
        setDrinks(data);
        return data;
      })
      .then(() => setLoading(false));
  }

  function toggleFavourites() {
    setShowFavourites((prevState) => !prevState);
  }

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>
          Displaying and filtering API data with React
        </h3>
        <h4 className={styles.demo__subheader}>
          You can choose your favourite drinks and view them on the next tab!
        </h4>
        <SearchBar onSearch={search} />
        <Loading />
      </div>
    );
  }
  if (searchResults.length > 0) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>
          Displaying and filtering API data with React
        </h3>
        <h4 className={styles.demo__subheader}>
          You can choose your favourite drinks and view them on the next tab!
        </h4>
        <SearchBar onSearch={search} />
        <ShowFavouritesButton
          toggleFavourites={toggleFavourites}
          showFavourites={showFavourites}
        />
        {showFavourites ? (
          <FavouriteDrinks />
        ) : (
          <SearchResults searchResults={searchResults} />
        )}
      </div>
    );
  }
  if (showFavourites) {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>
          Displaying and filtering API data with React
        </h3>
        <h4 className={styles.demo__subheader}>
          You can choose your favourite drinks and view them on the next tab!
        </h4>
        <SearchBar onSearch={search} />
        <ShowFavouritesButton
          toggleFavourites={toggleFavourites}
          showFavourites={showFavourites}
        />
        <FavouriteDrinks />
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.demo__header}>
          Displaying and filtering API data with React
        </h3>
        <h4 className={styles.demo__subheader}>
          You can choose your favourite drinks and view them on the next tab!
        </h4>
        <SearchBar onSearch={search} />
        <ShowFavouritesButton
          toggleFavourites={toggleFavourites}
          showFavourites={showFavourites}
        />
        
        {showFavourites ? (
          <FavouriteDrinks />
        ) : (
          <Drinks drinks={drinks} />
        )}
      </div>
    );
  }
}

export default App;
