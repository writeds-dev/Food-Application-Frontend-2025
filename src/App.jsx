import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Pages/Menu";
import Resevation from "./Pages/Resevation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blog from "./Pages/Blog";
import Blog2 from "./Pages/Blog2";
import Faq from "./Pages/Faq";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Main from "./Pages/Main";
import Layout from "./Components/Layout";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/Aboutus";
import Chefs from "./Pages/Chef";
import Gallerys from "./Pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route path='/' element={<Layout/>} >
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reservation" element={<Resevation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/details" element={<Blog2 />} />
        <Route path="/chef" element={<Chefs />} />
        <Route path="/gallery" element={<Gallerys/>} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
