import { Box, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactOthers = () => {
  return (
    <>
      <Box marginBottom={3}>
        <Typography>OriZon</Typography>
        <Typography>Centre XXX XXX XX</Typography>
        <Typography>00 rue XXXX XXX XXX</Typography>
        <Typography>00000 Ville</Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography>04 00 00 00 00</Typography>
        <Typography>06 00 00 00 00</Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography>Ouverture</Typography>
        <Typography>Du lundi au vendredi de XX à XX</Typography>
        <Typography>Et le samedi de XX à XX</Typography>
      </Box>
      <Box>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          color="primary"
          sx={{ fontSize: "2rem" }}
        >
          <FacebookIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          color="primary"
          sx={{ fontSize: "2rem" }}
        >
          <LinkedInIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
      </Box>
    </>
  );
};

export default ContactOthers;
