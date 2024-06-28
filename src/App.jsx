import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-bootstrap";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Help from "./Pages/Help/Help";
import Offers from "./Pages/Offers/Offers";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Restaurants from "./Pages/Restaurants/Restaurants";
import Menu from "./Pages/Restaurants/Menu/Menu";
import AddToCart from "./Pages/AddToCart/AddToCart";
import { ShopContextProvider } from "./Components/Context/ShopContext";
function App() {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/menu/:id" element={<Menu />} />
            <Route path="/cart" element={<AddToCart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
