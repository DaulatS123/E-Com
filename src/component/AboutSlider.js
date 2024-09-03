import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import human1 from "../assets/images/human-1.png";
import human2 from "../assets/images/human-2.png";
import human3 from "../assets/images/human-3.png";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { RiLinkedinLine } from "react-icons/ri";

const products = [
  {
    image: human1,
    name: "Tom Cruise",
    jobDescription: "Founder & Chairman",
  },
  {
    image: human2,
    name: "Emma Watson",
    jobDescription: "Managing Director",
  },
  {
    image: human3,
    name: "Will Smith",
    jobDescription: "Product Designer",
  },
];

const AboutSlider = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 10000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  const renderProductCards = () => {
    return products.map((product, index) => (
      <div
        key={index}
        className="col-lg-4 d-flex flex-column"
      >
        <div className="d-flex justify-content-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-50 w-100 mt-4"
          />
        </div>
        <div className=" w-100">
          <p className="fs-2 text-dark fw-bold text-start">{product.name}</p>
        </div>
        <div className="w-100">
          <p className="fs-5 text-black fw-normal text-start">{product.jobDescription}</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
        <CiTwitter className="fs-4"/>
        <IoLogoInstagram className="fs-4"/>
        <RiLinkedinLine className="fs-4"/>
        </div>
      </div>
    ));
  };
  

  const renderSlides = () => {
    return (
      <div className="item">
        <div className="row my-3 d-flex align-items-center">
          {renderProductCards()}
        </div>
      </div>
    );
  };

  return (
    <OwlCarousel className="owl-theme " {...options}>
      {renderSlides()}
      {renderSlides()}
      {renderSlides()}
    </OwlCarousel>
  );
};

export default AboutSlider;
