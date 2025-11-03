import React from "react";
import styles from "./ShowFavouritesButton.module.css";

function ToggleFavouritesButton({ toggleFavourites, showFavourites }) {
  return (
    <div>
      <button
        id="button"
        type="button"
        className={styles.favouritebutton}
        onClick={toggleFavourites}
      >
        {showFavourites ? "Hide favourites" : "Show favourites"}
      </button>
    </div>
  );
}

export default ToggleFavouritesButton;
