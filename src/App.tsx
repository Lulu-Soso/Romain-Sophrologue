import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./commons/components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import AboutUs from "./views/about/AboutUs";
import Contact from "./views/contact/Contact";
import { Container } from "@mui/material";

function App() {
  const [appBarHeight, setAppBarHeight] = useState(0);
  const muiPadding = 16;

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

      <Container sx={{ mt: `${appBarHeight + muiPadding}px ` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
