import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import vector from "../assets/images/Vector.png";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import "./Navbar.css"

function ColorSchemesExample() {
  return (
    <>
      <div className="bg-black d-flex flex-column flex-md-row align-items-center text-white py-2 px-3 position-relative">
        <div className="d-flex align-items-center justify-content-center w-100 gap-2 flex-wrap">
          <p className="mb-0 text-center text-md-left">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <span>
            <a href="#" className="text-white text-center d-inline-block">
              Shop Now
            </a>
          </span>
        </div>

        <div className="position-absolute end-0 mx-3 mx-md-5 top-50 translate-middle-y">
          <Dropdown>
            <Dropdown.Toggle
              variant="black"
              id="dropdown-basic"
              className="text-white"
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Navbar bg="white" expand="lg" className="py-2">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Exclusive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto gap-3 gap-md-5">
              <Link
                to="/"
                className="fw-bold fs-6 text-decoration-none text-black"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="fw-bold fs-6 text-decoration-none text-black"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="fw-bold fs-6 text-decoration-none text-black"
              >
                About
              </Link>
              <Link
                to="/signup"
                className="fw-bold fs-6 text-decoration-none text-black"
              >
                SignUp
              </Link>
            </Nav>

            <div className="d-flex gap-2 align-items-center">
              <div className="bg-secondary bg-opacity-10 px-3 py-1 rounded">
                <form className="d-flex align-items-center gap-2">
                  <input
                    className="form-control bg-transparent border-0"
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                    style={{ fontSize: "12px" }}
                  />
                  <img
                    src={vector}
                    alt="Search Icon"
                    style={{ width: "20px", height: "20px" }}
                  />
                </form>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <Link to="/wishlist" className="text-dark fs-3">
                  <IoMdHeartEmpty />
                </Link>
                <Link to="/cart" className="text-dark fs-3">
                  <AiOutlineShoppingCart />
                </Link>
              </div>

              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="bg-white text-dark border-0 d-flex align-items-center rounded-circle pt-3 pb-2 "
                >
                  <IoPersonOutline className="fs-4" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link><Dropdown.Item as={Link} to="/myaccount">Manage My Account</Dropdown.Item></Link>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
}

export default ColorSchemesExample;
