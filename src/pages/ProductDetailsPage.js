import React from "react";
import Controller1 from "../assets/images/Controller-1.png";
import Controller2 from "../assets/images/Controller-2.png";
import Controller3 from "../assets/images/Controller-3.png";
import Controller4 from "../assets/images/Controller-4.png";
import Controller5 from "../assets/images/Controller-5.png";
import FourStar from "../assets/images/Four Star.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeliveryIcon from "../assets/images/icon-delivery.png";
import ReturnIcon from "../assets/images/Icon-return.png";
import RelatedItem from "../component/RelatedItem"

import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductDetailsPage = () => {
  // Initialize state to store the counter value
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => setCount(count + 1);

  // Function to handle decrement
  const decrement = () => setCount(count - 1);
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <ul className="d-flex list-unstyled gap-3 align-items-center mb-0 justify-content-center justify-content-lg-start justify-content-md-center justify-content-sm-center">
              <li>
                <Link to="/" className="text-decoration-none text-muted">
                  Home
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li>
                <Link to="/" className="text-decoration-none text-muted">
                  Gaming
                </Link>
              </li>
              <li className="text-muted">/</li>
              <li className="text-dark fw-bold opacity">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <img src={Controller1} alt="" className="mb-3 img-fluid" />
            <img src={Controller2} alt="" className="mb-3 img-fluid" />
            <img src={Controller3} alt="" className="mb-3 img-fluid" />
            <img src={Controller4} alt="" className="mb-3 img-fluid" />
          </div>
          <div className="col-12 col-lg-5 mb-3 mb-lg-0">
            <img src={Controller5} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-5">
            <p className="fs-4 fw-bold mb-2">Havic HV G-92 Gamepad</p>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src={FourStar}
                alt=""
                className="h-auto w-auto"
                style={{ maxHeight: "25px", maxWidth: "100px" }}
              />
              <p className="fs-6 text-muted mb-0">(150 Reviews)</p>
              <div className="fs-6">|</div>
              <p className="fs-6 mb-0" style={{ color: "SpringGreen" }}>
                In Stock
              </p>
            </div>

            <div className="mb-4">
              <p className="fs-4 text-black fw-normal">$192.00</p>
              <p className="fs-6 text-black fw-normal">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble-free install & mess-free
                removal. Pressure sensitive.
              </p>
            </div>
            <hr />

            <div className="d-flex gap-3 align-items-center mb-4">
              <p className="fs-5 text-black mb-0">Colours:</p>
              <div
                className="rounded-circle bg-danger"
                style={{ width: "30px", height: "30px" }}
              ></div>
              <div
                className="rounded-circle bg-primary"
                style={{ width: "30px", height: "30px" }}
              ></div>
            </div>

            <div className="d-flex gap-2 align-items-center mb-4 flex-wrap">
              <p className="fs-5 text-black mb-0">Size:</p>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="fs-6 border bg-white border-secondary px-3 py-1"
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="d-flex gap-3 align-items-center mb-3 flex-wrap">
              <div className="d-flex border align-items-center rounded">
                <div className="fs-5 py-1 px-3 border border-top-0 border-start-0 border-bottom-0">
                  <LuMinus />
                </div>
                <div className="fs-5 py-2 px-4">{count}</div>
                <div className="fs-5 py-1 px-3 border border-top-0 border-end-0 border-bottom-0">
                  <FiPlus />
                </div>
              </div>
              <button className="py-2 px-4 border-0 bg-danger text-white rounded">
                Buy Now
              </button>
              <button className="fs-4 border border-3 py-1 px-3 rounded">
                <IoIosHeartEmpty />
              </button>
            </div>

            <div className="border border-2 rounded">
              <div className="d-flex align-items-center gap-3 px-3 py-1">
                <img
                  src={DeliveryIcon}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "40px" }}
                />
                <div>
                  <p className="fs-5 text-black fw-normal mb-0">
                    Free Delivery
                  </p>
                  <p className="fs-6 text-black fw-normal">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center gap-3 px-3 py-1">
                <img
                  src={ReturnIcon}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "40px" }}
                />
                <div>
                  <p className="fs-5 text-black fw-normal mb-0">Free Returns</p>
                  <p className="fs-6 text-black fw-normal">
                    Enter your postal code for Return Eligibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedItem/>
    </>
  );
};

export default ProductDetailsPage;
