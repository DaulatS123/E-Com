import React from "react";
import "./CardSliderC.css";
import cadbury from "../assets/images/images/cadbuary.png";
import camera from "../assets/images/images/camera.png";
import laptop from "../assets/images/images/laptop.png";
import curology from "../assets/images/images/curology.png";
import car from "../assets/images/images/car.png";
import shose from "../assets/images/images/shose.png";
import gaming from "../assets/images/images/gamingcontroller.png";
import jacket from "../assets/images/images/jacket.png";
import fivestar from "../assets/images/Five star.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const products = [
  {
    image: cadbury,
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "HAVIT HV-G92 Gamepad",
    price1: "$120",
    price2: "$160",
    rating: "(88)",
  },
  {
    image: camera,
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "AK-900 Wired Keyboard",
    price1: "$960",
    price2: "$1160",
    rating: "(75)",
  },
  {
    image: laptop,
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "IPS LCD Gaming Monitor",
    price1: "$370",
    price2: "$400",
    rating: "(99)",
  },
  {
    image: curology,
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "S-Series Comfort Chair",
    price1: "$375",
    price2: "$400",
    rating: "(99)",
  },
  {
    image: car,
    new:"New",
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "HAVIT HV-G92 Gamepad",
    price1: "$120",
    price2: "$160",
    rating: "(88)",
  },
  {
    image: shose,
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "AK-900 Wired Keyboard",
    price1: "$960",
    price2: "$1160",
    rating: "(75)",
  },
  {
    image: gaming,
    new:"New",
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "IPS LCD Gaming Monitor",
    price1: "$370",
    price2: "$400",
    rating: "(99)",
  },
  {
    image: jacket,
    icon: <CiHeart />,
    eye:<IoEyeOutline />,
    name: "S-Series Comfort Chair",
    price1: "$375",
    price2: "$400",
    rating: "(99)",
  },
];

const CardSliderC = () => {
  const options = {
    items: 1,
    loop: false,
    margin: 10,
    nav: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L3.707 7.5H14.5A.5.5 0 0 1 15 8z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>'
    ],
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
        <div className="image-2 d-flex justify-content-center">
          {product.new ? (
            <>
            <div className="py-1 px-3 new">{product.new}</div>
            <li className="icons">{product.icon}</li>
            <li className="eyeicons">{product.eye}</li>
            <img src={product.image} alt={product.name} />
            </>
    
            
          ) : (
            <>
              <img src={product.image} alt={product.name} />
              <ul className="icons-list">
                <li className="icons">{product.icon}</li>
                <li className="eyeicons">{product.eye}</li>
              </ul>
              <button className="btn btn-dark add-to-cart-2">Add to Cart</button>
            </>
          )}
        </div>
        <div className="heading-2 mt-3">
          <p>{product.name}</p>
        </div>
        <div className="d-flex gap-2">
          <p className="prices">{product.price1}</p>
          <div className="d-flex gap-2 ratings">
            <img src={fivestar} alt="Rating" />
            <p>{product.rating}</p>
          </div>
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

export default CardSliderC;
