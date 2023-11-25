import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Map from "./components/Map";
import ContactForm from "./components/ContactForm";

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
