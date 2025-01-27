import React from "react";
import Slider from "react-slick";
import "./OfferCarousel.css";
import Burger from "./Images/Burger.jpg";
import Momo from "./Images/Momo.jpg";
import PaneerRoll from "./Images/Paneer Roll.jpg";

const OfferCarousel = () => {
  const offers = [
    {
      image: Burger,
      title: "Veg All-in-One Meal",
      oldPrice: "₹228",
      newPrice: "₹160",
      description: "With Eat Club Membership",
    },
    {
      image: Momo,
      title: "Non-Veg All-in-One Meal",
      oldPrice: "₹298",
      newPrice: "₹209",
      description: "With Eat Club Membership",
    },
    {
      image: PaneerRoll,
      title: "Introducing Sandwich",
      oldPrice: "₹119",
      newPrice: "₹83",
      description: "With Eat Club Membership",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="offer-carousel">
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>
                <span className="old-price">{offer.oldPrice}</span>
                <span className="new-price">{offer.newPrice}</span>
              </p>
              <p className="description">{offer.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferCarousel;
