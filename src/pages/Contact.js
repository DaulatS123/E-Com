import React from "react";
import phone from "../assets/images/icons-phone.png";
import mail from "../assets/images/icons-mail.png";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
              <li className="text-dark fw-bold opacity">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-sm-12 justify-content-sm-center justify-content-md-center">
            <div className="py-5 px-5 shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex gap-3 align-items-center mb-4">
                <img src={phone} alt="" />
                <span className="fw-bold fs-5 text-black">Call To Us</span>
              </div>
              <p className="fs-6 fw-normal text-black">
                We are available 24/7, 7 days a week.
              </p>
              <p className="fs-6 fw-normal text-black">Phone: +8801611112222</p>
              <hr />
              <div className="d-flex gap-3 align-items-center mb-4">
                <img src={mail} alt="" />
                <span className="fw-bold fs-5 text-black">Write To US</span>
              </div>
              <p className="fs-6 fw-normal text-black">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="fs-6 fw-normal text-black">
                Emails: customer@exclusive.com
              </p>
              <p className="fs-6 fw-normal text-black">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="py-5 px-5 shadow p-3 mb-5 bg-body rounded">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your name"
                      className="py-3 bg-light border-0"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Your Email"
                      className="py-3 bg-light border-0"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <InputGroup hasValidation>
                      <Form.Control
                        type="number"
                        placeholder="Your Phone"
                        aria-describedby="inputGroupPrepend"
                        required
                        className="py-3 bg-light border-0"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "225px" }}
                      className="mt-3 border-0 bg-light"
                    />
                  </FloatingLabel>
                </Row>

                <div className="d-flex justify-content-end">
                  <button className="bg-danger border-0 text-white py-3 px-5 rounded d-flex justify-content-end">
                    Send Massage
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
