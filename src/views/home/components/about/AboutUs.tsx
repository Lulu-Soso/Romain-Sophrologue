import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Slide1 from "../../../../assets/img/slide1.jpg";

const AboutUs = () => {
  const imageStyle = {
    backgroundImage: `url(${Slide1})`,
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    mx: 0,
    my: 3,
    borderRadius: 2,
  };

  return (
    <Container sx={{ my: 10 }}>
      <Grid container spacing={2} mb={10}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ textAlign: "start" }}>
            <Typography
              variant="h4"
              sx={{ textDecoration: "underline" }}
              mb={3}
            >
              Qui suis-je ?
            </Typography>

            <Typography variant="body1" mb={2}>
              Je suis Romain Prea, sophrologue, praticien en Amma assis, massage
              sonore vibratoire au bols tibétain et massage harmonisant.
            </Typography>
            <Typography variant="body1" mb={2}>
              Je suis Romain Prea, sophrologue, praticien en Amma assis, massage
              sonore vibratoire au bols tibétain et massage harmonisant.
            </Typography>
            <Typography variant="body1" mb={2}>
              Je suis Romain Prea, sophrologue, praticien en Amma assis, massage
              sonore vibratoire au bols tibétain et massage harmonisant.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={imageStyle} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" sx={{ textDecoration: "underline" }} mb={3}>
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
      </Grid>
    </Container>
  );
};

export default AboutUs;
