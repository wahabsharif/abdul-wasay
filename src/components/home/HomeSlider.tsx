import dynamic from "next/dynamic";
import React from "react";

const HomeBanner = dynamic(() => import("./HomeBanner"), { ssr: false });
const AboutBanner = dynamic(() => import("./AboutBanner"), { ssr: false });

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
