import React from "react";
import CarouselContainer from "./components/carousel/CarouselContainer";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <CarouselContainer />

      <Container sx={{ pt: 2 }}>
        <Typography>Accueil</Typography>
      </Container>
    </>
  );
};

export default Home;
