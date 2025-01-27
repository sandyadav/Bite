import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Parathas", icon: "🥙" },
    { name: "Fast Food", icon: "🍔" },
    { name: "Thalis", icon: "🍛" },
    { name: "Snacks", icon: "🍟" },
    { name: "Beverages", icon: "🍹" },
    { name: "Desserts", icon: "🍰" },
    { name: "Rice Dishes", icon: "🍚" },
    { name: "Combos", icon: "🍱" },
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Navigating to /catalogue/${categoryName}`);
    navigate(`/catalogue/${categoryName}`);
  };

  return (
    <div className="categories-grid">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-item"
          onClick={() => handleCategoryClick(category.name)}
        >
          <div className="category-icon">{category.icon}</div>
          <div className="category-name">{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;

