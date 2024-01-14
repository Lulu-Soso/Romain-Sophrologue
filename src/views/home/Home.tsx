import React from "react";
import { Container } from "@mui/material";
import Header from "./components/header/Header";
import AboutUs from "./components/about/AboutUs";

const Home = () => {
  return (
    <>
      <Header />

      <Container sx={{ pt: 2 }}>
        <AboutUs />
      </Container>
    </>
  );
};

export default Home;
