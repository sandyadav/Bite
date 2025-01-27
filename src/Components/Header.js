import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faShoppingCart, faHeadset } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for routing
import "./Header.css";
import Logo from "./Images/Logo.png"; // Ensure the case matches exactly!

const Header = () => {
    return (
        <header className="header-container">
            {/* Logo Section */}
            <div className="logo-container">
                <img src={Logo} alt="Bite Bargain Logo" className="site-logo" />
            </div>

            {/* Search Bar Section */}
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search for food, deals, etc..." 
                    className="search-bar" 
                />
                <button className="search-btn">
                    <FontAwesomeIcon icon={faSearch} /> Search
                </button>
            </div>

            {/* Navigation Tabs with Icons */}
            <div className="nav-tabs">
                <Link to="/" className="nav-link"> {/* Home Button */}
                    <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <Link to="/contact" className="nav-link">
                    <FontAwesomeIcon icon={faHeadset} /> Customer Support
                </Link>
                <Link to="/deals" className="nav-link">
                    <FontAwesomeIcon icon={faHome} /> Deals
                </Link>
                <Link to="/cart" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </Link>
                <Link to="/signin" className="nav-link">
                    <FontAwesomeIcon icon={faUser} /> Sign In
                </Link>
            </div>
        </header>
    );
};

export default Header;
