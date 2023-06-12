import React from "react";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((sneaker) => (
          <div key={sneaker.id} className="sneaker">
            <div>
              <h3>{sneaker.title}</h3>
            </div>
            <div>
              <img src={sneaker.media.thumbUrl} alt="#" />
            </div>
            <div>
              {favorites.some((s) => s.id === sneaker.id) ? (
                <button onClick={() => removeFromFavorites(sneaker.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(sneaker)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have anything in favorites yet!</h1>
      )}
    </div>
  );
};

export default Favorites;