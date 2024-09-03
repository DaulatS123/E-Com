import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const MyAccount = () => {
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
      <div className="container mt-4 mb-4">
        <ul className="d-flex flex-column flex-md-row list-unstyled justify-content-between align-items-center mb-0">
          <div className="d-flex gap-2 flex-column flex-md-row flex-sm-row align-items-md-center">
            <li>
              <Link to="/" className="text-decoration-none text-muted">
                Home
              </Link>
            </li>
            <li className="text-muted">/</li>
            <li className="text-dark fw-bold">My Account</li>
          </div>
          <div className="d-flex gap-2 flex-column flex-md-row flex-sm-row align-items-md-center mt-2 mt-md-0">
            <p className="text-black mb-0">Welcome!</p>
            <p className="text-danger fw-semibold mb-0">MD Rimel</p>
          </div>
        </ul>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row justify-content-md-center justify-content-sm -center ">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="mb-3">
              <h6>Manage My Account</h6>
              <div className="d-flex flex-column gap-2 px-0 px-md-4 px-lg-5">
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </div>
            </div>

            <div className="mb-3">
              <h6>Manage My Account</h6>
              <div className="d-flex flex-column gap-2 px-0 px-md-4 px-lg-5">
                <li>My Returns</li>
                <li>My Cancellations</li>
              </div>
            </div>

            <div>
              <h6>Manage My Account</h6>
            </div>
          </div>

          <div className="col-md-9 border py-5 px-3 px-md-5 shadow-sm p-3 mb-3 bg-body rounded">
            <div className="px-0 px-md-5">
              <h5 className="mb-3 text-danger">Edit Your Profile</h5>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-5">
                  <Form.Group
                    as={Col}
                    xs={12}
                    md={6}
                    controlId="validationCustom01"
                  >
                    <Form.Label className="fs-5 text-black">
                      First name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Md"
                      className="bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid first name.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    xs={12}
                    md={6}
                    controlId="validationCustom02"
                  >
                    <Form.Label className="fs-5 text-black">
                      Last name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Rimel"
                      className="bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    xs={12}
                    md={6}
                    controlId="validationCustom03"
                  >
                    <Form.Label className="fs-5 text-black">Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="rimel1111@gmail.com"
                      className="bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    xs={12}
                    md={6}
                    controlId="validationCustom04"
                  >
                    <Form.Label className="fs-5 text-black">Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Kingston, 5236, United States"
                      className="bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="valid">
                      Looks good!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    xs={12}
                    md={12}
                    controlId="validationCustom05"
                  >
                    <Form.Label className="fs-5 text-black">
                      Password Changes
                    </Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Current password"
                      className="mb-3 bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your current password.
                    </Form.Control.Feedback>

                    <Form.Control
                      required
                      type="password"
                      placeholder="New password"
                      className="mb-3 bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a new password.
                    </Form.Control.Feedback>

                    <Form.Control
                      required
                      type="password"
                      placeholder="Confirm New password"
                      className="bg-light border-0 py-3"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please confirm your new password.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Form>
              <div className="d-flex flex-column flex-md-row justify-content-end gap-3">
                <button className="border-0 bg-white fs-5 text-black">
                  Cancel
                </button>
                <button className="py-3 px-5 border-0 fs-5 text-white bg-danger rounded">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
