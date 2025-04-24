import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Food from "./components/pages/Food";
import Home from "./components/Home";
import Beauty from "./components/pages/Beauty";
import Garden from "./components/pages/Garden";
import Wholesale from "./components/pages/Wholesale";
import Toys from "./components/pages/Toys";
import Frozen from "./components/pages/Frozen"; 
import Dairy from "./components/pages/Dairy";
import House from "./components/pages/House";
import Flourrice from "./components/pages/Flourrice";
import Cart from "./components/pages/Cart";
import ContextProvider from "./features/ContextProvider";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import Reset from "./components/pages/Reset";
import Faqs from "./components/pages/Faqs";
import Terms from "./components/pages/Terms";
import Return from "./components/pages/Return";
import About from "./components/pages/About";
import Careers from "./components/pages/Careers";
import Contact from "./components/pages/Contact";
import Partner from "./components/pages/Partner";
import Location from "./components/pages/Location"
import ProductDetails from "./components/pages/ProductDetails";





function App() {
  return (
    <ContextProvider>
      <Router>
        <Nav />

        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/frozen" element={<Frozen />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/house" element={<House />} />
          <Route path="/flourrice" element={<Flourrice />} />
          <Route path="/food" element={<Food />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/reset" element={<Reset/>} />
          <Route path="/faqs" element={<Faqs/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/return" element={<Return/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/partner" element={<Partner/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
