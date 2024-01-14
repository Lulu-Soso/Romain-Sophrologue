import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import diplome1 from "../../../../assets/img/diplome-1.jpg";
import diplome2 from "../../../../assets/img/diplome-2.jpg";

const items = [
  {
    title: "Formation 1",
    img: diplome1,
    school: "Ecole XXX",
    city: "Lyon 8",
  },
  {
    title: "Formation 2",
    img: diplome2,
    school: "Ecole XXX",
    city: "Lyon 8",
  },
  {
    title: "Formation 3",
    img: diplome1,
    school: "Ecole XXX",
    city: "Lyon 8",
  },
];

const Formations = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
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

              <Typography>{item.school}</Typography>
              <Typography>{item.city}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Formations;
