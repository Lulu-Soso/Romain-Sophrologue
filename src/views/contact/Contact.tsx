import React from "react";
import { Container, Typography } from "@mui/material";
import ContactForm from "../../commons/components/contactForm/ContactForm"


const Contact = () => {
  return (
    <Container sx={{ pt: 2 }}>
      <Typography>Contact Page</Typography>
      <ContactForm />
    </Container>
  );
};

export default Contact;