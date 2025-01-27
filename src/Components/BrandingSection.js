import React from "react";
import "./BrandingSection.css";
import Slogan from "./Images/Slogan-Final.PNG";

const BrandingSection = () => {
  return (
    <section className="branding-section">
      <div className="branding-content">
        <h2>Why Choose Bite Bargain?</h2>
        <p>
          At <strong>Bite Bargain</strong>, we prioritize quality over speed. While others promise 15-minute deliveries, we ensure your meal arrives fresh, authentic, and hygienic — even if it takes a minute longer. 
        </p>
        <p>
          Our mission is to deliver a delightful culinary experience with every bite. Whether you're craving a desi meal or a quick snack, trust us to deliver meals prepared with love and care.
        </p>

        <button className='BrandingSection_Button'>Order Now</button>
      </div>
      <div className="branding-image">
        <img src={Slogan} alt="Fresh Food Delivered"/>
      </div>
    </section>
  );
};

export default BrandingSection;
