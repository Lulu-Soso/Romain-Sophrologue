import React from "react";
import { Container, Typography } from "@mui/material";
import Header from "./components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <Container sx={{ pt: 2 }}>
        <Typography>Accueil</Typography>
      </Container>
    </>
  );
};

export default Home;
