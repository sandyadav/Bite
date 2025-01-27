import React from "react";
import "./BestSellers.css"; // Link to your CSS file

const BestSellers = () => {
  const items = [
    {
      name: "Sattu Paratha",
      description: "1 Piece",
      price: "₹80 - ₹120",
      image: "path/to/sattu-paratha.jpg", // Add your image path here
    },
    {
      name: "Veg Burger",
      description: "1 Piece",
      price: "₹100 - ₹180",
      image: "path/to/veg-burger.jpg", // Add your image path here
    },
    {
      name: "Burger Combo (Burger, Fries, Soft Drink)",
      description: "1 Meal",
      price: "₹150 - ₹250",
      image: "path/to/burger-combo.jpg", // Add your image path here
    },
    {
      name: "Veg Momos",
      description: "1 Plate (6-8 pieces)",
      price: "₹80 - ₹150",
      image: "path/to/veg-momos.jpg", // Add your image path here
    },
  ];

  const handleAddClick = (itemName) => {
    // This function will handle the "Add" button click
    console.log(`${itemName} added to cart!`);
    // You can later replace this with your logic to update the cart state
  };

  return (
    <section className="best-sellers">
      <h2>Best Sellers</h2>
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-price">{item.price}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddClick(item.name)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
