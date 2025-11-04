import styles from "./App.module.css";
import { useEffect, useState } from "react";
import cocktailDB from "./api";
import Drinks from "./components/Drinks/Drinks";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/Loading/Loading";
import SearchResults from "./components/Searchresults/SearchResults";
import FavouriteDrinks from "./components/Favourites/Favourites";
import ShowFavouritesButton from "./components/ShowFavouritesButton/ShowFavouritesButton";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState("true");
  const [showFavourites, setShowFavourites] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(null);



  async function search(term) {
    await cocktailDB
      .search(term)
      .then((result) => setSearchResults(result))
      .then(() => setLoading(false));
      setShowFavourites(false);
  }

  useEffect(() => {
    tenDrinksArray();
  }, []);

  useEffect(() => {
    getDrinkData();
  }, []);

  async function tenDrinksArray() {
    let drinksArray = [];

    for (let i = 0; i < 10; i++) {
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

  function openDetails(drink) {
    setSelectedDrink(drink);
    setShowDetails(true);
  }

  function closeDetails() {
    setShowDetails(false);
    setSelectedDrink(null);
  }

  if (searchResults.length > 0) {
    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <SearchBar onSearch={search} />
          <ShowFavouritesButton
            toggleFavourites={toggleFavourites}
            showFavourites={showFavourites}
          />
          {showDetails && (
            <Details drink={selectedDrink} onClose={closeDetails} />
          )}
          {loading ? <Loading /> : null}
          {showFavourites ? (
            <FavouriteDrinks onShowDetails={openDetails} />
          ) : (
            <SearchResults
              searchResults={searchResults}
              onShowDetails={openDetails}
            />
          )}
        </div>
      </>
    );
  }
  if (showFavourites) {
    return (
      <div className={styles.wrapper}>
        <Header />
        <ShowFavouritesButton
          toggleFavourites={toggleFavourites}
          showFavourites={showFavourites}
        />
        <FavouriteDrinks onShowDetails={openDetails} />
        {showDetails && (
          <Details drink={selectedDrink} onClose={closeDetails} />
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <Header />
        <SearchBar onSearch={search} />
        <ShowFavouritesButton
          toggleFavourites={toggleFavourites}
          showFavourites={showFavourites}
        />
        {loading ? <Loading /> : null}
        {showFavourites ? (
          <FavouriteDrinks onShowDetails={openDetails} />
        ) : (
          <Drinks drinks={drinks} onShowDetails={openDetails} />
        )}
        {showDetails && (
          <Details drink={selectedDrink} onClose={closeDetails} />
        )}
      </div>
    );
  }
}

export default App;
