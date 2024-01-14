import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import diplome1 from "../../../../assets/img/diplome-1.jpg";
import diplome2 from "../../../../assets/img/diplome-2.jpg";

const items = [
  {
    title: "Partenaire 1",
    img: diplome1,
    enterprise: "Entreprise XXX",
    city: "Lyon 8",
  },
  {
    title: "Partenaire 2",
    img: diplome2,
    enterprise: "Entreprise XXX",
    city: "Lyon 8",
  },
  {
    title: "Partenaire 3",
    img: diplome1,
    enterprise: "Entreprise XXX",
    city: "Lyon 8",
  },
  {
    title: "Partenaire 4",
    img: diplome2,
    enterprise: "Entreprise XXX",
    city: "Lyon 8",
  },
];

const Partners = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} md={3} key={item.title}>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "200px",
                  height: "150px",
                  borderRadius: 2,
                }}
              ></Box>

              <Typography>{item.enterprise}</Typography>
              <Typography>{item.city}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
