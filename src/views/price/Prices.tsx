import React from "react";
import { Container, Typography } from "@mui/material";
import PriceCardCarousel from "./components/PriceCardCarousel";

const Prices = () => {
  return (
    <Container sx={{ pt: 4 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Offrez-vous votre séance de bien-être
      </Typography>

      <PriceCardCarousel />
    </Container>
  );
};

export default Prices;
