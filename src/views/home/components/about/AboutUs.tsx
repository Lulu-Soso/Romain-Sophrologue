import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Slide1 from "../../../../assets/img/slide1.jpg";

const aaa = `<Typography
              variant="h4"
              sx={{ textDecoration: "underline" }}
              mb={3}
            >
              Qui suis-je ?
            </Typography>`;

const bbb = `      <Grid container spacing={2}>
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
      </Grid>`;

const AboutUs = () => {
  const imageStyle = {
    backgroundImage: `url(${Slide1})`,
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    mx: 0,
    borderRadius: 2,
  };

  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      <Grid container spacing={2}>
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
            <Typography variant="body1" mb={2}>
              Je suis <span style={{ fontWeight: "bold" }}>Romain Prea</span>,{" "}
              <span style={{ fontWeight: "bold" }}>sophrologue</span> établi à
              l'Horme, dans le département de la Loire (42152).
            </Typography>
            <Typography variant="body1" mb={2}>
              Mon parcours professionnel a débuté dans l'industrie textile,
              forgeant des compétences essentielles telles que{" "}
              <span style={{ fontWeight: "bold" }}>
                la patience, la persévérance et la minutie
              </span>
              . Bien que cette expérience m'ait permis de subvenir à mes
              besoins, une aspiration profonde me poussait vers un avenir
              professionnel différent.
            </Typography>
            <Typography variant="body1" mb={2}>
              Naturellement anxieux, j'ai exploré diverses disciplines pour
              apaiser mes inquiétudes. La découverte des{" "}
              <span style={{ fontWeight: "bold" }}>
                bienfaits de la respiration
              </span>{" "}
              a été décisive, me conduisant finalement à{" "}
              <span style={{ fontWeight: "bold" }}>la sophrologie</span>. Les
              bénéfices que j'en ai retirés sont si significatifs que je ressens
              maintenant le besoin de les partager avec autrui.
            </Typography>
            <Typography variant="body1" mb={2}>
              Arrivé en France à l'âge de 3 ans, j'ai dû faire face à des
              différences culturelles, stimulant ainsi{" "}
              <span style={{ fontWeight: "bold" }}>
                mon sens de l'adaptation, ma capacité à accueillir la diversité
                et à m'ouvrir à de nouvelles perspectives
              </span>
              . Mes origines asiatiques ont joué un rôle significatif dans ma
              vie professionnelle, nourrissant ma connexion avec des{" "}
              <span style={{ fontWeight: "bold" }}>
                philosophies orientales axées sur l'équilibre, la méditation et
                le bien-être
              </span>
              . C'est de cette influence que découle mon engagement, et j'ai
              trouvé dans la sophrologie{" "}
              <span style={{ fontWeight: "bold" }}>
                une approche unique de la santé mentale et physique, harmonisant
                le corps et l'esprit
              </span>
              .
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={imageStyle} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
