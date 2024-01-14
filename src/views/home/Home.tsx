import React from "react";
import CarouselContainer from "./components/carousel/CarouselContainer";
import TestimonialContainer from "./components/testimonial/TestimonialContainer"
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <CarouselContainer />

      <Container sx={{ pt: 2 }}>
        <Typography>Accueil</Typography>
        <TestimonialContainer />
      </Container>
    </>
  );
};

export default Home;
