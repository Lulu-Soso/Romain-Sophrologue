import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoOrizon from "../../../assets/img/Logo-oriZon.png"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        padding: 4,
        bgcolor: "background.paper",
        backgroundColor: "#9BA698",
      }}
    >
      <Container>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4} textAlign="left">
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Accueil
            </Typography>
            <Box
              sx={{
                m: "1rem 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
            <Typography variant="subtitle1" color="textSecondary">
              Prestations:
              <br />
              - Sophrologie
              <br />
              - Massage sonore vibratoire aux bols tibétains
              <br />
              - Massage harmonisant
              <br />
              - Massage Amma assis
              <br />
              - Presta 5
              <br />
              - Presta 6
              <br />- Presta 7
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Tarifs
            </Typography>
            <Box
              sx={{
                m: "1rem 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Link href="/contact" color="textSecondary">
                Contact
              </Link>
              <br />
              <Link href="#" color="textSecondary">
                CGV / CGU
              </Link>
            </Box>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                color="primary"
                sx={{ fontSize: '2rem' }}
              >
                <FacebookIcon sx={{ fontSize: 'inherit' }}/>
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                color="primary"
                sx={{ fontSize: '2rem' }}
              >
                <LinkedInIcon sx={{ fontSize: 'inherit' }}/>
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Box sx={{ float: "right" }}>
              <Box 
                component="img"
                src={LogoOrizon}
                alt="Logo"
                sx={{ height: 60}}
              />
              <Typography variant="h6" color="textPrimary" gutterBottom>
                OriZon
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Copyright 2023
                <br />
                Tous droits réservés
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
