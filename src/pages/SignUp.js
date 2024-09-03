import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import img from "../assets/images/Frame 760.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import google from '../assets/images/Icon-Google.png'

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the formData ");
    console.log(formData);

    // Save formData to local storage
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);

    navigate("/login");
  }

  return (
    <>
      <div className="mt-5">
        <Row>
          <Col className="col-8">
            <img src={img} alt="leftimages" className="h-75 w-75" />
          </Col>
          <Col className="col-4 mt-2 py-5 w-25">
            <h1 className="mb-4">Create an account</h1>
            <p className="mb-5">Enter your details below</p>
            <Form onSubmit={submitHandler}>
              <Form.Group
                as={Row}
                
                controlId="formPlaintextEmail"
              >
                <Col sm="10">
                  <Form.Control
                    className="border-0 "
                    type="text"
                    name="firstname"
                    placeholder="Name"
                    value={formData.firstname}
                    onChange={changeHandler}
                  />
                  <hr />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                
                controlId="formPlaintextEmail"
              >
                <Col sm="10">
                  <Form.Control
                    className="border-0 "
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    value={formData.email}
                    onChange={changeHandler}
                  />
                  <hr />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                
                controlId="formPlaintextPassword"
              >
                <Col sm="10">
                  <Form.Control
                    className="border-0 "
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    value={formData.password}
                    onChange={changeHandler}
                  />
                  <hr />
                </Col>
              </Form.Group>
              <div className="d-flex flex-column gap-3">
              <Button variant="primary" type="submit" className="py-2 bg-danger border-0 fs-6">
                Create Account
              </Button>
              <Button variant="primary" type="submit" className="py-2 bg-white text-black fw-700 fs-6">
                <span><img src={google} alt="" /></span> Sign up with google
              </Button>
            </div>
            </Form>
            
            <div className="d-flex justify-content-center gap-3 mt-3">
              <p>Already have account?</p>
              <Link to="/login" className="text-black fs-6 fw-bold">Login</Link>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignUp;
