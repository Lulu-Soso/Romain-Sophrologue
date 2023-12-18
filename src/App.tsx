import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./commons/components/header/Header";
import Footer from "./commons/components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import AboutUs from "./views/about/AboutUs";
import Contact from "./views/contact/Contact";
import { Box } from "@mui/material";
import Services from "./views/service/Services";
import Prices from "./views/price/Prices";

function App() {
  const [appBarHeight, setAppBarHeight] = useState(0);

  useEffect(() => {
    const appBar = document.querySelector(".MuiAppBar-root");
    if (appBar) {
      const height = appBar.getBoundingClientRect().height;
      setAppBarHeight(height);
    }
  }, []);

  return (
    <div>
      <Header />

      <Box sx={{ mt: `${appBarHeight}px ` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>

      <Footer />
    </div>
  );
}

export default App;
