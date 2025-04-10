import React from 'react';
import Header from "./Header";

const textShadowStyle = {
  textShadow: "3px 5px 5px rgba(0, 0, 0, 0.3)",
};

interface BannerProps {
  page: string;
  breadcrumb: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({page, breadcrumb, image}) => {
  return (
    <div className="relative mb-[170px]">
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <img src={image} alt="Banner" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1
          className="text-banner-color text-2xl sm:text-4xl lg:text-6xl leading-8 sm:leading-10 lg:leading-14 font-bold"
          style={textShadowStyle}
        >
          {page}
        </h1>
        <p
          className="text-banner-color text-sm sm:text-lg lg:text-xl leading-6 sm:leading-8 lg:leading-10 font-medium"
          style={textShadowStyle}
        >
          Home <i className="fa-solid fa-greater-than"></i> {breadcrumb}
        </p>
      </div>
    </div>
  );
};

export default Banner;
