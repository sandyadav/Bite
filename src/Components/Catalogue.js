import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./Catalogue.css";

const Catalogue = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [items, setItems] = useState([]);
  
  // Sample data (replace this with your actual data)
  const categoriesData = useMemo(() => ( {
    Parathas: [
      { name: "Sattu Paratha", serving: "1 Piece", priceRange: "₹80 - ₹120", image: require('../Components/Images/Sattu Paratha.PNG')},
      { name: "Aloo Paratha", serving: "1 Piece", priceRange: "₹60 - ₹90", image: require('../Components/Images/Aloo Paratha.PNG')},
      { name: "Paneer Paratha", serving: "1 Piece", priceRange: "₹90 - ₹150", image: require('../Components/Images/Paneer Paratha.jpg') },
      { name: "Pyaz Paratha", serving: "1 Piece", priceRange: "₹70 - ₹100", image: require('../Components/Images/Pyaz Paratha.jpg') },
      { name: "Methi Paratha", serving: "1 Piece", priceRange: "₹80 - ₹120", image: require('../Components/Images/Methi Paratha.jpg') },
      { name: "Gobhi Paratha", serving: "1 Piece", priceRange: "₹80 - ₹130", image: require('../Components/Images/Gobhi Paratha.jpg') },
    ],
    "Fast Food": [
      { name: "Veg Burger", serving: "1 Piece", priceRange: "₹100 - ₹180", image: require('../Components/Images/Veg Burger.jpg') },
      { name: "Aloo Tikki Burger", serving: "1 Piece", priceRange: "₹70 - ₹120", image: require('../Components/Images/Aloo Tikki Burger.jpg') },
      { name: "Paneer Burger", serving: "1 Piece", priceRange: "₹120 - ₹180", image: require('../Components/Images/Paneer Burger.jpg') },
      { name: "Veg Wrap", serving: "1 Piece", priceRange: "₹90 - ₹150", image: require('../Components/Images/Veg Wrap.jpg') },
      { name: "Cheese Sandwich", serving: "1 Sandwich", priceRange: "₹80 - ₹140", image: require('../Components/Images/Cheese Sandwich.jpg') },
      { name: "French Fries", serving: "1 Serving (100-150g)", priceRange: "₹50 - ₹120", image: require('../Components/Images/French Fries.jpg') },
    ],
    Thalis: [
      { name: "Veg Thali", serving: "1 Plate", priceRange: "₹150 - ₹250", image: require('../Components/Images/Veg Thali.jpg') },
      { name: "Punjabi Thali", serving: "1 Plate", priceRange: "₹180 - ₹300", image: require('../Components/Images/Punjabi Thali.jpg') },
      { name: "South Indian Thali", serving: "1 Plate", priceRange: "₹180 - ₹300", image: require('../Components/Images/South Indian Thali.PNG') },
      { name: "Rajasthani Thali", serving: "1 Plate", priceRange: "₹200 - ₹350", image: require('../Components/Images/French Fries.jpg') },
      { name: "Jain Thali", serving: "1 Plate", priceRange: "₹200 - ₹350", image: require('../Components/Images/French Fries.jpg') },
    ],
    Snacks: [
      { name: "Bread Pakoda", serving: "1 Serving (2 pieces)", priceRange: "₹40 - ₹70", image: require('../Components/Images/French Fries.jpg') },
      { name: "Pyaz Pakoda", serving: "1 Serving (2 pieces)", priceRange: "₹40 - ₹80", image: require('../Components/Images/French Fries.jpg') },
      { name: "Aloo Chop", serving: "1 Piece", priceRange: "₹50 - ₹80", image: require('../Components/Images/French Fries.jpg') },
      { name: "Samosa", serving: "1 Piece", priceRange: "₹20 - ₹50", image: require('../Components/Images/French Fries.jpg') },
      { name: "Veg Cutlet", serving: "1 Piece", priceRange: "₹40 - ₹70", image: require('../Components/Images/French Fries.jpg') },
      { name: "Dhokla", serving: "1 Serving (4-5 pieces)", priceRange: "₹40 - ₹80", image: require('../Components/Images/French Fries.jpg') },
    ],
    Beverages: [
      { name: "Tea", serving: "1 Cup (200ml)", priceRange: "₹30 - ₹60", image: require('../Components/Images/French Fries.jpg') },
      { name: "Coffee", serving: "1 Cup (200ml)", priceRange: "₹40 - ₹80", image: require('../Components/Images/French Fries.jpg') },
      { name: "Virgin Mojito", serving: "1 Glass (300ml)", priceRange: "₹120 - ₹180", image: require('../Components/Images/French Fries.jpg') },
      { name: "Shirley Temple", serving: "1 Glass (300ml)", priceRange: "₹100 - ₹150", image: require('../Components/Images/French Fries.jpg') },
      { name: "Piña Colada (Non-Alcoholic)", serving: "1 Glass (300ml)", priceRange: "₹150 - ₹250", image: require('../Components/Images/French Fries.jpg') },
      { name: "Lemonade", serving: "1 Glass (300ml)", priceRange: "₹50 - ₹90", image: require('../Components/Images/French Fries.jpg') },
      { name: "Mix Fruit Smoothie", serving: "1 Glass (300ml)", priceRange: "₹120 - ₹180", image: require('../Components/Images/French Fries.jpg') },
      { name: "Iced Tea", serving: "1 Glass (300ml)", priceRange: "₹60 - ₹100", image: require('../Components/Images/French Fries.jpg') },
    ],
    Desserts: [
      { name: "Gulab Jamun", serving: "2 Pieces", priceRange: "₹50 - ₹80", image: require('../Components/Images/French Fries.jpg') },
      { name: "Gajar Halwa", serving: "1 Serving (200g)", priceRange: "₹100 - ₹150", image: require('../Components/Images/French Fries.jpg') },
      { name: "Ice Cream", serving: "1 Scoop (100-150g)", priceRange: "₹50 - ₹100", image: require('../Components/Images/French Fries.jpg') },
      { name: "Brownie", serving: "1 Piece", priceRange: "₹70 - ₹120", image: require('../Components/Images/French Fries.jpg') },
      { name: "Rasgulla", serving: "2 Pieces", priceRange: "₹40 - ₹70", image: require('../Components/Images/French Fries.jpg') },
    ],
    "Rice Dishes": [
      { name: "Veg Biryani", serving: "1 Serving (300-350g)", priceRange: "₹180 - ₹250", image: require('../Components/Images/French Fries.jpg') },
      { name: "Pulao", serving: "1 Serving (250g)", priceRange: "₹120 - ₹200", image: require('../Components/Images/French Fries.jpg') },
      { name: "Jeera Rice", serving: "1 Serving (250g)", priceRange: "₹80 - ₹120", image: require('../Components/Images/French Fries.jpg') },
      { name: "Curd Rice", serving: "1 Serving (250g)", priceRange: "₹80 - ₹120", image: require('../Components/Images/French Fries.jpg') },
    ],
    Combos: [
      { name: "Veg Combo (Rice, 2 Subzis, Roti)", serving: "1 Meal", priceRange: "₹180 - ₹250", image: require('../Components/Images/French Fries.jpg') },
      { name: "Non-Veg Combo (Rice, 2 Non-Veg Subzis, Roti)", serving: "1 Meal", priceRange: "₹250 - ₹400", image: require('../Components/Images/French Fries.jpg') },
      { name: "Paratha Combo (2 Parathas, Veg Subzi)", serving: "1 Meal", priceRange: "₹120 - ₹200", image: require('../Components/Images/French Fries.jpg') },
      { name: "Burger Combo (Burger, Fries, Soft Drink)", serving: "1 Meal", priceRange: "₹150 - ₹250", image: require('../Components/Images/French Fries.jpg') },
    ],
    "Special Dishes": [
      { name: "Paneer Tikka", serving: "1 Serving (200g)", priceRange: "₹150 - ₹250", image: require('../Components/Images/French Fries.jpg') },
      { name: "Veg Manchurian", serving: "1 Serving (200g)", priceRange: "₹120 - ₹180" , image: require('../Components/Images/French Fries.jpg')},
      { name: "Chole Bhature", serving: "1 Serving (2 Bhature)", priceRange: "₹150 - ₹250", image: require('../Components/Images/French Fries.jpg') },
      { name: "Veg Momos", serving: "1 Plate (6-8 pieces)", priceRange: "₹80 - ₹150", image: require('../Components/Images/French Fries.jpg') },
      { name: "Hakka Noodles", serving: "1 Serving (250g)", priceRange: "₹120 - ₹180", image: require('../Components/Images/French Fries.jpg') },
    ],
  }),[]);

  useEffect(() => {
    // Fetch the category items based on the selected category
    setItems(categoriesData[categoryName] || []);
  }, [categoryName, categoriesData]);  // Add categoriesData to the dependency array

  return (
    <div className="catalogue-container">
      <h2>{categoryName} Items</h2>
      <div className="category-items">
        <div className="selected-category">
          <h3>{categoryName} Items</h3>
          <div className="item-list">
            {items.map((item, index) => (
              <ItemCard key={index} item={item} />
            ))}
          </div>
        </div>
        {/* Display all categories below the selected one */}
        {Object.keys(categoriesData).map((category, index) => {
          if (category !== categoryName) {
            return (
              <div key={index} className="category-section">
                <h3>{category}</h3>
                <div className="item-list">
                  {categoriesData[category].map((item, itemIndex) => (
                    <ItemCard key={itemIndex} item={item} />
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Catalogue;