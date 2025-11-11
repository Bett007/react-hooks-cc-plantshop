import React from "react";

function PlantCard({ plant, onToggleStock }) {
  if (!plant) return null;

  const { id, name, image, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* removed .toFixed(2) since price already includes decimals in data */}
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button
          className="primary"
          onClick={() => onToggleStock && onToggleStock(id)}
        >
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleStock && onToggleStock(id)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
