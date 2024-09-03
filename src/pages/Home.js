import React from "react";
import "./Home.css";
import Accordion from "react-bootstrap/Accordion";
import OwlCarousel from "react-owl-carousel";
import CardSlider from "../component/CardSlider";
import CardSliderB from "../component/CardSliderB";
import CardSliderC from "../component/CardSliderC";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import phone from "../assets/images/Category-CellPhone.png";
import watch from "../assets/images/Category-SmartWatch.png";
import computer from "../assets/images/Category-Computer.png";
import headphone from "../assets/images/Category-Headphone.png";
import gaming from "../assets/images/Category-Gamepad.png";
import camera from "../assets/images/Category-Camera.png";
import craousalimage from "../assets/images/craousal img.png";
import mainimages from "../assets/images/mainimages.png";
import playstation from "../assets/images/images/playstation.png";
import girl from "../assets/images/images/girl.png";
import minispeaker from "../assets/images/images/minispeaker.png";
import perfume from "../assets/images/images/perfume.png";
import fafd from "../assets/images/images/fafd.png";
import cs from "../assets/images/images/cs.png";
import mbg from "../assets/images/images/mbg.png";


const Home = () => {
  // Carousel settings
  const options = {
    items: 3, // Number of items to show
    loop: true, // Loop through items
    margin: 10, // Margin between items
    nav: false, // Show navigation arrows
    dots: true, // Show pagination dots
    autoplay: true, // Auto play the carousel
    autoplayTimeout: 10000, // Auto play delay
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      {/* First-section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 justify-content-start ">
            <Accordion>
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>Woman’s Fashion</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-0">
                <Accordion.Header>Men’s Fashion</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-0">
                <Accordion.Header>Electronics</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="border-0">
                <Accordion.Header>Home & Lifestyle</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="border-0">
                <Accordion.Header>Medicine</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="border-0">
                <Accordion.Header>Sports & Outdoor</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className="border-0">
                <Accordion.Header>Baby’s & Toys</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className="border-0">
                <Accordion.Header>Groceries & Pets</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" className="border-0">
                <Accordion.Header>Health & Beauty</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <img src={craousalimage} alt="" className="images" />
              </div>
              <div className="item bg-black d-flex">
                <img src={craousalimage} alt="" className="images" />
              </div>
              <div className="item bg-black d-flex">
                <img src={craousalimage} alt="" className="images" />
              </div>
              <div className="item bg-black d-flex">
                <img src={craousalimage} alt="" className="images" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      {/* Slider  */}

      <CardSlider />

      {/* category */}

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="">
          <div className="d-flex align-items-center gap-3 py-3">
            <div className="box bg-danger"></div>
            <p className="fw-600 fs-5 text-danger my-auto">Categories</p>
          </div>
          <div className="d-flex align-items-center gap-3 py-3">
            <h2 className="text-black">Browse By Category</h2>
          </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-2 ">
            <div className="boxs border py-4 d-flex flex-column gap-4 align-items-center  justify-content-center">
              <img src={phone} alt="" />
              <p className="fs-5 text-black">Phones</p>
            </div>
          </div>
          <div className="col-sm-2 ">
            <div className="boxs border py-4 d-flex flex-column gap-4 align-items-center  justify-content-center">
              <img src={computer} alt="" />
              <p className="fs-5 text-black">Computer</p>
            </div>
          </div>
          <div className="col-sm-2 ">
            <div className="boxs border py-4 d-flex flex-column gap-4 align-items-center  justify-content-center">
              <img src={watch} alt="" />
              <p className="fs-5 text-black">SmartWatch</p>
            </div>
          </div>
          <div className="col-sm-2 ">
            <div className="boxs border py-4 d-flex flex-column gap-4 align-items-center  justify-content-center">
              <img src={camera} alt="" />
              <p className="fs-5 text-black">Camera</p>
            </div>
          </div>
          <div className="col-sm-2 ">
            <div className="boxs border py-4 d-flex flex-column gap-4 align-items-center  justify-content-center">
              <img src={headphone} alt="" />
              <p className="fs-5 text-black">Headphone</p>
            </div>
          </div>
          <div className="col-sm-2 ">
            <div className="boxs border py-4 d-flex flex-column gap-4 align-items-center  justify-content-center">
              <img src={gaming} alt="" />
              <p className="fs-5 text-black">Gaming</p>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* flash sales */}

      <CardSliderB />

      {/* MainImage */}

      <div className="container mt-5 mb-5">
        <div className="row py-5 ">
          <img src={mainimages} alt="" />
        </div>
      </div>

      {/* slider */}

      <CardSliderC />

      {/* Image-Section */}

      <div className="container ">
        <div className="row">
          <div className="d-flex align-items-center gap-3 py-3">
            <div className="box bg-danger"></div>
            <p className="fw-600 fs-5 text-danger my-auto">Featured</p>
          </div>
          <div className="d-flex align-items-center gap-3 py-3">
            <h2 className="text-black">New Arrival</h2>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-sm-6">
            <img src={playstation} alt=""  />
          </div>
          <div className="col-sm-6">
            <div className="row mb-3 ">
              <div className="col-sm-6">
                <img src={girl} alt="" className=""/>
              </div>
            </div>
            <div className="row gap-4 ">
              <div className="col-sm-5 py-3">
                <img src={minispeaker} alt=""  />
              </div>
              <div className="col-sm-5  py-3">
                <img src={perfume} alt=""  />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FinalSection */}

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

export default Home;
