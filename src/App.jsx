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

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Resevation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<Blog2 />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
