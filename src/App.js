import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route
import Header from './Components/Header';
import Footer from './Components/Footer';
import OfferCarousel from './Components/OfferCarousel';
import BrandingSection from './Components/BrandingSection';
import Categories from './Components/Categories';
import BestSellers from './Components/BestSellers';
import Catalogue from './Components/Catalogue'; // Import Catalogue component

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="offer-carousel-section">
                <OfferCarousel />
              </div>
              <BrandingSection />
              <Categories />
              <BestSellers />
            </>
          }
        />

        {/* Catalogue Page */}
        <Route path="/catalogue/:categoryName" element={<Catalogue />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;


