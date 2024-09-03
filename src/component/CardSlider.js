import React from "react";
import "./CardSlider.css";
import gameingcontroller from "../assets/images/gameing-controller.png";
import keyboard from "../assets/images/keyboard.png";
import chair from "../assets/images/chair.png";
import moniter from "../assets/images/moniter.png";
import fivestar from "../assets/images/Five star.png";
import Wishlist from "../pages/Wishlist"

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { useState } from "react";
import { useEffect } from "react";

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
    discount: "-40%",
    icon: <CiHeart />,
    eye: <IoEyeOutline />,
    name: "AK-900 Wired Keyboard",
    price1: "$960",
    price2: "$1160",
    rating: "(75)",
  },
  {
    image: moniter,
    discount: "-40%",
    icon: <CiHeart />,
    eye: <IoEyeOutline />,
    name: "IPS LCD Gaming Monitor",
    price1: "$370",
    price2: "$400",
    rating: "(99)",
  },
  {
    image: chair,
    discount: "-40%",
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
    // State to manage liked status and wishlist
  const [likedProducts, setLikedProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Handle like button click
  const handleLike = (index, product) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(index)
        ? prevLikedProducts.filter((i) => i !== index)
        : [...prevLikedProducts, index]
    );

    // Update wishlist
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.index === index)
        ? prevWishlist.filter((item) => item.index !== index)
        : [...prevWishlist, { index, ...product }]
    );
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


    return products.map((product, index) => (
      <div key={index} className="col-md-3">
        <div className="image d-flex justify-content-center">
          <img src={product.image} alt={product.name} />
          <div className="py-1 px-3 helo">{product.discount}</div>
          <li
            className="icon"
            style={{ color: likedProducts.includes(index) ? "red" : "black" }}
            onClick={() => handleLike(index)}
          >
            {product.icon}
          </li>
          <li className="eyeicon">{product.eye}</li>
          <button className="btn btn-dark add-to-cart">Add to Cart</button>
        </div>
        <Link to="/ProductDetailsPage">
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
        </Link>
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

export default CardSlider;
