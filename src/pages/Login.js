import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import img from "../assets/images/Frame 760.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (formData.email === savedEmail && formData.password === savedPassword) {
      navigate("/");
    } else {
      setError("Incorrect email or password.");
    }
  }

  return (
    <>
       <Container className="mt-5">
      <Row className="align-items-center justify-content-center">
        <Col sm={12} md={12} lg={6} className="text-center mb-4 mb-lg-0">
          <img src={img} alt="leftimages" className="img-fluid" />
        </Col>
        <Col sm={12} md={12} lg={4}>
          <h1 className="mb-4">Log in to Exclusive</h1>
          <p className="mb-5">Enter your details below</p>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formPlaintextEmail" className="mb-4">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={changeHandler}
                className="border-0 border-bottom border-secondary rounded-0"
              />
            </Form.Group>

            <Form.Group controlId="formPlaintextPassword" className="mb-4">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={changeHandler}
                className="border-0 border-bottom border-secondary rounded-0"
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <Button
                variant="primary"
                type="submit"
                className="py-2 px-4"
                style={{ backgroundColor: "#DB4444", borderColor: "#DB4444" }}
              >
                Log In
              </Button>
              <Button
                variant="link"
                className="text-danger p-0"
                onClick={() => navigate("/forgot-password")}
              >
                Forget Password?
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Login;
