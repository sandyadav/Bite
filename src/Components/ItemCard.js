import React from "react";
import "./ItemCard.css"; // Assuming the CSS you shared is in ItemCard.css

const ItemCard = ({ item }) => {
  const handleAddToCart = () => {
    // Add your add-to-cart functionality here
    console.log(`${item.name} added to cart!`);
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-serving">Serving: {item.serving}</p>
        <p className="item-price-range">
          <span className="item-price">
            {item.priceRange}
          </span>
        </p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
