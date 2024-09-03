import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import MyAccount from "./pages/MyAccount"
import ProductDetailsPage from "./pages/ProductDetailsPage";


function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/myaccount" element={<MyAccount />} />
          <Route exact path="/ProductDetailsPage" element={<ProductDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
