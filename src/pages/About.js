import React from "react";
import { Link } from "react-router-dom";
import girlsImg from "../assets/images/Girls Image.png";
import "./About.css";
import service from "../assets/images/wishlist-services.png";
import service2 from "../assets/images/wishlist-services2.png";
import service3 from "../assets/images/wishlist-services3.png";
import Aboutslider from "../component/AboutSlider"
import fafd from "../assets/images/images/fafd.png"
import cs from "../assets/images/images/cs.png"
import mbg from "../assets/images/images/mbg.png"

const About = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <ul className="d-flex list-unstyled gap-3 align-items-center mb-0">
          <li>
            <Link to="/" className="text-decoration-none text-muted">
              Home
            </Link>
          </li>
          <li className="text-muted">/</li>
          <li className="text-dark fw-bold opacity">About</li>
        </ul>
      </div>

      <div className="container-fluid py-5 main-box">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 d-flex">
            <div className="d-flex justify-content-center flex-column ms-5 me-5 px-5">
              <h1 className="mb-5 fw-bold fs-1 tracking-wide font-inter">
                Our Story
              </h1>
              <p className="mb-4 fs-6">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
            <div className="d-flex justify-content-end">
              <img src={girlsImg} alt="" className="girls-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row py-5">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex flex-column mb-4">
            <div className=" justify-content-center align-items-center d-flex flex-column py-3">
              <img src={service} alt="" className="mb-3" />
              <h4 className="fs-2 text-black fw-bold">10.5K</h4>
              <p className="text-black">Sellers active on our site</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex flex-column mb-4">
            <div className="border justify-content-center align-items-center d-flex flex-column py-3">
              <img src={service} alt="" className="mb-3" />
              <h4 className="fs-2 text-black fw-bold">33K</h4>
              <p className="text-black">Monthly Product Sale</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex flex-column mb-4">
            <div className="border justify-content-center align-items-center d-flex flex-column py-3">
              <img src={service2} alt="" className="mb-3" />
              <h4 className="fs-2 text-black fw-bold">45.5K</h4>
              <p className="text-black">Customers active on our site</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex flex-column mb-4">
            <div className="border justify-content-center align-items-center d-flex flex-column py-3">
              <img src={service3} alt="" className="mb-3" />
              <h4 className="fs-2 text-black fw-bold">25K</h4>
              <p className="text-black">Annual gross sale on our site</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <Aboutslider/>
      </div>

      <div className="container mt-4 mb-5">
          <div className="row py-5">
            <div className="col-sm-4 d-flex flex-column align-items-center">
              <img src={fafd} alt="" className="mb-3" />
              <h4 className="heading">FREE AND FAST DELIVERY</h4>
              <p className="title">Free delivery for all orders over $140</p>
            </div>
            <div className="col-sm-4 d-flex flex-column align-items-center">
              <img src={cs} alt="" className="mb-3" />
              <h4 className="heading">24/7 CUSTOMER SERVICE</h4>
              <p className="title">Friendly 24/7 customer support</p>
            </div>
            <div className="col-sm-4 d-flex flex-column align-items-center">
              <img src={mbg} alt="" className="mb-3" />
              <h4 className="heading">MONEY BACK GUARANTEE</h4>
              <p className="title">We return money within 30 days</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default About;
