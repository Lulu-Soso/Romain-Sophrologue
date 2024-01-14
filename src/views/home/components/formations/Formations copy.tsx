import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import diplome1 from "../../../../assets/img/diplome-1.jpg";
import diplome2 from "../../../../assets/img/diplome-2.jpg";

const Formations = () => {
  const imageStyle = {
    width: "50%",
    marginBottom: "10px",
  };

  return (
    <Container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography
            variant="h5"
            sx={{ color: "#A698A3", textDecoration: "underline" }}
            mb={3}
          >
            Mes formations
          </Typography>
          <Typography variant="body1">
            Je suis Romain Prea, sophrologue, praticien en Amma assis, massage
            sonore vibratoire au bols tibétain et massage harmonisant.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: "center" }} my={3}>
          <img src={diplome1} alt="Séance Individuelle" style={imageStyle} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="body1">
            Je suis Romain Prea, sophrologue, praticien en Amma assis, massage
            sonore vibratoire au bols tibétain et massage harmonisant.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: "center" }} my={3}>
          <img src={diplome2} alt="Séance Individuelle" style={imageStyle} />
        </Box>
      </Grid>
    </Container>
  );
};

export default Formations;
