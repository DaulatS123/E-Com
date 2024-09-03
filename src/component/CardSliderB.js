import React from "react";
import "./CardSliderB.css";
import jacket from "../assets/images/jacket.png";
import bag from "../assets/images/bag.png";
import speaker from "../assets/images/speaker.png";
import bookself from "../assets/images/bookself.png";
import fivestar from "../assets/images/Five star.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const products = [
  {
    image: jacket,
    name: "HAVIT HV-G92 Gamepad",
    price1: "$120",
    price2: "$160",
    rating: "(88)",
  },
  {
    image: bag,
    name: "AK-900 Wired Keyboard",
    price1: "$960",
    price2: "$1160",
    rating: "(75)",
  },
  {
    image: speaker,
    name: "IPS LCD Gaming Monitor",
    price1: "$370",
    price2: "$400",
    rating: "(99)",
  },
  {
    image: bookself,
    name: "S-Series Comfort Chair",
    price1: "$375",
    price2: "$400",
    rating: "(99)",
  },  
];

const CardSliderB = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
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
      <div key={index} className="col-md-3">
        <div className="image-3 d-flex justify-content-center">
          <img src={product.image} alt={product.name} />
          <button className="btn btn-dark add-to-cart-3">Add to Cart</button>
        </div>
        <div className="heading-3 mt-3">
          <p>{product.name}</p>
        </div>
        <div className="d-flex gap-2">
          <p className="price-3">{product.price1}</p>
          <p className="price-4">{product.price2}</p>
        </div>
        <div className="d-flex gap-2 rating-3">
          <img src={fivestar} alt="Rating" />
          <p>{product.rating}</p>
        </div>
      </div>
    ));
  };

  const renderSlides = () => {
    return (
      <div className="item">
        <div className="container ">
          <div className="row">
            <div className="d-flex align-items-center gap-3 py-3">
              <div className="box bg-danger"></div>
              <p className="fw-600 fs-5 text-danger my-auto">Our Products</p>
            </div>
            <div className="d-flex align-items-center gap-3 py-3">
              <h2 className="text-black">Explore Our Products</h2>
            </div>
          </div>
          <div className="row my-3 d-flex align-items-center">
            {renderProductCards()}
          </div>
          <div className="row">
            <div className="d-flex align-items-center justify-content-center py-5">
              <button className="py-3 px-5 bg-danger text-white border-0 button">
                View All Products
              </button>
            </div>
          </div>
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

export default CardSliderB;
