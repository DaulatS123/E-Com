import React from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import moniter from "../assets/images/moniter.png";

const Cart = () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <ul className="d-flex list-unstyled gap-2 align-items-center mb-0">
          <li>
            <Link to="/" className="text-decoration-none text-muted">
              Home
            </Link>
          </li>
          <li className="text-muted">/</li>
          <li className="text-dark fw-bold">Cart</li>
        </ul>
      </div>

      <div className="container">
        <div className="row mt-4 mb-4">
          {/* Header Row */}
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-body rounded">
              <p className="mb-0">Product</p>
              <p className="mb-0">Price</p>
              <p className="mb-0">Quantity</p>
              <p className="mb-0">Subtotal</p>
            </div>
          </div>

          {/* Product Rows */}
          {[1, 2].map((item, index) => (
            <div className="col-12" key={index}>
              <div className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-body rounded">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={moniter}
                    alt="LCD Monitor"
                    className="img-fluid"
                    style={{ maxWidth: "80px" }}
                  />
                  <p className="mb-0">LCD Monitor</p>
                </div>
                <p className="mb-0">$650</p>
                <div className="col-4 col-md-3 col-lg-2 p-0">
                  <Form.Group controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                      <Form.Control
                        type="number"
                        placeholder="01"
                        aria-describedby="inputGroupPrepend"
                        required
                        className="bg-light border-0 text-center"
                      />
                    </InputGroup>
                  </Form.Group>
                </div>
                <p className="mb-0">$650</p>
              </div>
            </div>
          ))}

          {/* Buttons */}
          <div className="col-12 d-flex justify-content-between mt-3">
            <Button variant="light" className="py-2 px-4">
              Return To Shop
            </Button>
            <Button variant="light" className="py-2 px-4">
              Update Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          {/* Coupon Code Section */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Form className="w-100">
                <Form.Group controlId="formCouponCode">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter coupon code"
                      aria-label="Coupon code"
                    />
                  </InputGroup>
                </Form.Group>
              </Form>
              <Button variant="danger" className="py-2 px-5 w-100 w-sm-auto">
                Apply Coupon
              </Button>
            </div>
          </div>

          {/* Cart Total Section */}
          <div className="col-12 col-lg-6">
            <div className="py-3 px-4 border rounded">
              <div className="mb-4">
                <p className="fs-4 fw-bold text-black">Cart Total</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>SubTotal:</p>
                <p>$1750</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Total:</p>
                <p>$1750</p>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="danger" className="py-2 px-5">
                  Proceed To Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
