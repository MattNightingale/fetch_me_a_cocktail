import React from "react";
import styles from "./Details.module.css";

function Details({ drink, onClose }) {
  if (!drink) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>
        <h2 className={styles.title}>{drink.name || drink.strDrink}</h2>
        {(drink.image || drink.strDrinkThumb) && (
          <img
            className={styles.image}
            src={drink.image || drink.strDrinkThumb}
            alt={drink.name || drink.strDrink}
          />
        )}
        {drink.category && (
          <p className={styles.meta}>
            <strong>Category:</strong> {drink.category}
          </p>
        )}
        {drink.alcoholic && (
          <p className={styles.meta}>
            <strong>Alcoholic:</strong> {drink.alcoholic}
          </p>
        )}

       
        {Array.isArray(drink.ingredients) &&
          drink.ingredients.filter(Boolean).length > 0 && (
            <div className={styles.ingredients}>
              <h4>Ingredients</h4>
              <ul>
                {drink.ingredients.map((ing, idx) => {
                  if (!ing) return null;
                  const measure = Array.isArray(drink.measures)
                    ? drink.measures[idx]
                    : null;
                  return (
                    <li key={idx} className={styles.ingredientItem}>
                      {measure ? `${measure.trim()} ` : ""}
                      {ing.trim()}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

        {drink.recipe && (
          <div className={styles.instructions}>
            <h4>Instructions</h4>
            <p>{drink.recipe}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
