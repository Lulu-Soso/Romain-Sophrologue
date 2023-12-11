import React from "react";
import { Grid, Box } from "@mui/material";
import handIMG from "../../assets/img/hand.jpg";
import ContactForm from "./components/form/ContactForm";
import Map from "./components/map/Map";

const Contact = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={0} md={1} lg={3} xl={4}></Grid>
            <Grid
              item
              xs={12}
              md={11}
              lg={9}
              xl={8}
              sx={{ minHeight: "calc(100vh - 64px)" }}
            >
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <ContactForm />

                <Map />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={0}
          md={6}
          sx={{
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url(${handIMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
