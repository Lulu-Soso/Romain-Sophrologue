import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Romain from "../../../../assets/img/Borey-circle.png";
import diplome1 from "../../../../assets/img/diplome-1.jpg";
import diplome2 from "../../../../assets/img/diplome-2.jpg";

const AboutUs = () => {
  const imageStyle = {
    width: "50%",
    marginBottom: "10px",
  };

  return (
    <Container sx={{ pt: 2 }}>
      <Grid container spacing={2}>
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
          <Box sx={{ textAlign: "start", padding: "1rem" }}>
            <Typography variant="body1">
              Je suis Romain Prea, sophrologue, praticien en Amma assis, massage
              sonore vibratoire au bols tibétain et massage harmonisant.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }} my={3}>
            <img src={Romain} alt="Séance Individuelle" style={imageStyle} />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h5"
            sx={{ color: "#A698A3", textDecoration: "underline" }}
            mb={3}
          >
            Mon parcours
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            deserunt eligendi, eius voluptas beatae numquam ut, rerum pariatur
            blanditiis consectetur ex repudiandae quaerat laborum ipsam ea
            aspernatur ducimus necessitatibus impedit labore sequi sit
            voluptates temporibus a. Harum accusantium pariatur provident
            explicabo asperiores, nesciunt aperiam omnis hic repudiandae.
            Obcaecati maxime voluptate esse omnis amet eligendi doloremque
            beatae, excepturi totam aspernatur mollitia culpa, enim sit
            provident ratione molestiae sed. Mollitia totam autem numquam
            repellat! Illo molestiae atque reiciendis, cum minus adipisci
            ducimus sit error. Nostrum vitae ipsum sunt nihil qui, ipsa ut
            assumenda autem modi quasi delectus reiciendis, libero beatae, ea
            adipisci!
          </Typography>
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
      </Grid>
    </Container>
  );
};

export default AboutUs;
