import styles from "./Drinks.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../Favourites/FavouritesSlice";

function Drinks({ drinks }) {
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
      {drinks.map((drink) => {
        return (
          <div key={drink[0].id} className={styles.tile}>
            <li className={styles.item}>
              <h2 className={styles.caption}>{drink[0].name}</h2>
              <img className={styles.image} src={drink[0].image} />
              <button
                className={styles.favouritebutton}
                onClick={() => handleToggleFavourite(drink[0])}
              >
                <img
                  className={
                    favourites.some((fav) => fav.id === drink[0].id)
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

export default Drinks;