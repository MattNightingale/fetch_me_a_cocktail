import styles from "./SearchResults.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../Favourites/FavouritesSlice";

function SearchResults({ searchResults, onShowDetails }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const handleToggleFavourite = (drink) => {
    const isFavourite = favourites.some((fav) => fav.id === drink.id);
    if (isFavourite) {
      dispatch(removeFromFavourites(drink.id));
    } else {
      dispatch(addToFavourites(drink));
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Showing your search results</h3>
      {searchResults.map((drink) => {
        return (
          <div key={drink.id} className={styles.tile}>
            <li
              className={styles.item}
              onClick={() => onShowDetails && onShowDetails(drink)}
            >
              <h2 className={styles.caption}>{drink.name}</h2>
              <img className={styles.image} src={drink.image} />
              <h4>Click for details</h4>
              <button
                className={styles.favouritebutton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleFavourite(drink);
                }}
              >
                <img
                  className={
                    favourites.some((fav) => fav.id === drink.id)
                      ? styles.favourite + " " + styles.active
                      : styles.favourite
                  }
                  src="/images/favheart.png"
                />
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
