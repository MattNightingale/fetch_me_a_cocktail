import React from "react";
import styles from "./ShowFavouritesButton.module.css";

function ToggleFavouritesButton({ toggleFavourites, showFavourites }) {
  

  return (
    <div className={styles.buttonWrapper}>
      <button
        id="button"
        type="button"
        className={styles.favouriteButton}
        onClick={toggleFavourites}
      >
        {showFavourites ? "Hide favourites" : "Show favourites"}
      </button>
    </div>
  );
}

export default ToggleFavouritesButton;
