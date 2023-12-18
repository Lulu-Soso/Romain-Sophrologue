import React from "react";
import { Container, Typography } from "@mui/material";
import PriceCardCarousel from "./components/PriceCardCarousel";

// const priceCards = [
//   { title: 'Plan Basique', description: 'Description du Plan Basique...' },
//   { title: 'Plan Standard', description: 'Description du Plan Standard...' },
//   { title: 'Plan Premium', description: 'Description du Plan Premium...' },
//   { title: 'Plan VIP', description: 'Description du Plan VIP...' },
//   { title: 'Plan Entreprise', description: 'Description du Plan Entreprise...' }
// ];

const Prices = () => {
  return (
    <Container sx={{ pt: 2 }}>
      {/* <Typography>Tarifs</Typography> */}
      {/* <PriceCardCarousel cards={priceCards} /> */}
      <PriceCardCarousel />
    </Container>
  );
};

export default Prices;
