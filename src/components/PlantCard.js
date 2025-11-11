import React from "react";

function PlantCard({ plant, onToggleStock }) {
  if (!plant) return null;

  const { id, name, image, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      {/* removed .toFixed(2) since price already includes decimals in data */}
      <p>Price: {price}</p>
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
