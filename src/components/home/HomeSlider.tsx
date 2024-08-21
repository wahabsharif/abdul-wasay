import React from "react";
import HomeBanner from "./HomeBanner";
import AboutBanner from "./AboutBanner";

function HomeSlider() {
  return (
    <div className="carousel w-full">
      <div className="carousel-item w-full">
        <HomeBanner />
      </div>
      <div className="carousel-item w-full">
        <AboutBanner />
      </div>
    </div>
  );
}

export default HomeSlider;
