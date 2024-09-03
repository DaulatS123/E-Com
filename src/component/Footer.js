import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import facebook from "../assets/images/Icon-Facebook.png";
import twitter from "../assets/images/Icon-Twitter.png";
import instagram from "../assets/images/icon-instagram.png";
import linkdien from "../assets/images/Icon-Linkedin.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white py-5 px-3">
        <Container>
          <Row className="g-5 d-flex justify-content-between">
            <Col xs={12} sm={6} md={4} lg={2}>
              <h3>Exclusive</h3>
              <h6>Subscribe</h6>
              <p>Get 10% off your first order</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control"
              />
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
              </ul>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <h4>Account</h4>
              <ul className="list-unstyled">
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <h4>Quick Link</h4>
              <ul className="list-unstyled">
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <h4>Download App</h4>
              <p>Save $3 with App New User Only</p>
              <div className="d-flex flex-column gap-2 mt-3">
                <div className="d-flex gap-3">
                  <img src={facebook} alt="Facebook" className="social-icon" />
                  <img src={twitter} alt="Twitter" className="social-icon" />
                  <img src={instagram} alt="Instagram" className="social-icon" />
                  <img src={linkdien} alt="LinkedIn" className="social-icon" />
                </div>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <p className="text-center copyright">Copyright Rimel 2022. All rights reserved</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
