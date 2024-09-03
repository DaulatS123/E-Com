import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
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
          <li className="text-dark fw-bold">404 Error</li>
        </ul>
      </div>

      <div className="container d-flex align-items-center justify-content-center min-vh-75 mt-5 mb-5">
        <div className="row text-center">
          <div className="col-12 py-5">
            <h1
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "110px",
                lineHeight: "115px",
                letterSpacing: "0.03em",
                fontWeight: 500,
                margin: "0",
              }}
              className="fw-bold text-center w-100 fs-md-6 fs-sm-4"
            >
              404 Not Found
            </h1>
            <p className="mb-4 fs-6 fs-md-5 fs-lg-4">
              The page you visited could not be found. You may go to the home
              page.
            </p>
            <button to="/" className="border-0 text-white bg-danger py-2 px-5">
              Back To Home Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
