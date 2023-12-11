import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Map from "./components/map/_Map";
import ContactForm from "./components/contactForm/_ContactForm";

const Contact = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <Typography>Contact Page</Typography>
      <Box sx={{ mb: 2 }}>
        <Map />
      </Box>
      <Box>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default Contact;
