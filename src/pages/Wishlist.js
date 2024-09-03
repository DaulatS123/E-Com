import React from "react";
import { Link } from "react-router-dom";
import fivestar from "../assets/images/Five star.png";
import gameingcontroller from "../assets/images/gameing-controller.png";
import keyboard from "../assets/images/keyboard.png";
import chair from "../assets/images/chair.png";
import moniter from "../assets/images/moniter.png";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Wishlist = () => {
  const [wishlist, setWishlist] = React.useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

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

  return (
    <div className="container">
      <h2 className="my-4">My Wishlist</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3">
            <div className="image d-flex justify-content-center">
              <img src={product.image} alt={product.name} />
              <div className="py-1 px-3">{product.discount}</div>
              <div className="icon">
                {product.icon}
              </div>
              <div className="eyeicon">
                {product.eye}
              </div>
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
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
