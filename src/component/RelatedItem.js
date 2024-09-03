import React from "react";
import "./CardSlider.css";
import gameingcontroller from "../assets/images/gameing-controller.png";
import keyboard from "../assets/images/keyboard.png";
import Speaker from "../assets/images/speaker.png";
import moniter from "../assets/images/moniter.png";
import fivestar from "../assets/images/Five star.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const products = [
  {
    image: gameingcontroller,
    discount: "-40%",
    icon: <CiHeart />,
    eye: <IoEyeOutline />,
    name: "HAVIT HV-G92 Gamepad",
    price1: "$120",
    price2: "$160",
    rating: "(88)",
  },
  {
    image: keyboard,
    discount: "-35%",
    icon: <CiHeart />,
    eye: <IoEyeOutline />,
    name: "AK-900 Wired Keyboard",
    price1: "$960",
    price2: "$1160",
    rating: "(75)",
  },
  {
    image: moniter,
    discount: "-30%",
    icon: <CiHeart />,
    eye: <IoEyeOutline />,
    name: "IPS LCD Gaming Monitor",
    price1: "$370",
    price2: "$400",
    rating: "(99)",
  },
  {
    image: Speaker,
    icon: <CiHeart />,
    eye: <IoEyeOutline />,
    name: "S-Series Comfort Chair",
    price1: "$375",
    price2: "$400",
    rating: "(99)",
  },
];

const CardSlider = () => {
  const options = {
    items: 1,
    loop: false,
    margin: 10,
    nav: false,
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
        <Link to="/ProductDetailsPage">
          <div className="image d-flex justify-content-center">
            {product.discount ? (
              <>
                <img src={product.image} alt={product.name} />
                <div className="py-1 px-3 helo">{product.discount}</div>
                <li className="icon">{product.icon}</li>
                <li className="eyeicon">{product.eye}</li>
                <button className="btn btn-dark add-to-cart">
                  Add to Cart
                </button>
              </>
            ) : (
              <>
                <img src={product.image} alt={product.name} />
                {/* <div className="py-1 px-3 helo">{product.discount}</div> */}
                <li className="icon">{product.icon}</li>
                <li className="eyeicon">{product.eye}</li>
                <button className="btn btn-dark add-to-cart">
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </Link>
        <div className="heading mt-3">
          <p>{product.name}</p>
        </div>
        <div className="d-flex gap-2">
          <p className="price-1">{product.price1}</p>
          <p className="price-2">{product.price2}</p>
        </div>
        <div className="d-flex gap-2 rating">
          <img src={fivestar} alt="Rating" />
          <p>{product.rating}</p>
        </div>
      </div>
    ));
  };

  const renderSlides = () => {
    return (
      <div className="item">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center gap-3 py-3">
              <div className="box bg-danger"></div>
              <p className="fw-600 fs-5 text-danger my-auto">Related Item</p>
            </div>
          </div>
          <div className="row my-3 d-flex align-items-center">
            {renderProductCards()}
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

export default CardSlider;
