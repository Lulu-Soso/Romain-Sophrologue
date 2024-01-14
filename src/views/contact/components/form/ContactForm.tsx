import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { ContactFormInput } from "../../../../types/ContactFormInput";
import { TabPanelProps } from "../../../../types/TabPanelProps";
import ContactOthers from "./ContactOthers";

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ width: "100%", minHeight: "480px", overflow: "auto" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const onSubmit: SubmitHandler<ContactFormInput> = (data) => {
    const formData = {
      _name: data.name,
      _email: data.email,
      _phoneNumber: data.phoneNumber,
      _subject: data.subject,
      _message: data.message,
    };

    emailjs
      .send("service_39551s2", "template_dr8fprn", formData, YOUR_PUBLIC_KEY)
      .then(
        (result) => {
          setSnackbarOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Paper elevation={3} sx={{ padding: "2rem", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Contactez-moi
          </Typography>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="simple tabs example"
          >
            <Tab
              label="Par mail"
              sx={{ fontFamily: "Baumans", letterSpacing: 2 }}
            />
            <Tab
              label="Autres"
              sx={{ fontFamily: "Baumans", letterSpacing: 2 }}
            />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              label="Nom *"
              variant="standard"
              InputProps={{
                sx: {
                  marginBottom: "1rem",
                },
                ...register("name", {
                  required: true,
                  maxLength: 80,
                }),
              }}
            />
            {errors.name && (
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(255, 71, 71)",
                  fontSize: "10px",
                }}
              >
                {errors.name.type === "required" && "Ce champ est obligatoire."}
                {errors.name.type === "maxLength" &&
                  "La longueur maximale est de 80 caractères."}
              </Typography>
            )}
            <TextField
              fullWidth
              label="Email *"
              variant="standard"
              InputProps={{
                sx: {
                  marginBottom: "1rem",
                },
                ...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                }),
              }}
            />
            {errors.email && (
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(255, 71, 71)",
                  fontSize: "10px",
                }}
              >
                {errors.email.type === "required" &&
                  "Ce champ est obligatoire."}
                {errors.email.type === "pattern" && "Adresse mail invalide."}
              </Typography>
            )}
            <TextField
              fullWidth
              label="Téléphone"
              variant="standard"
              InputProps={{
                sx: {
                  marginBottom: "1rem",
                },
                ...register("phoneNumber", {
                  pattern:
                    /^(?:(?:(?:\+|00)33[\s.-]?)|0)[1-9](?:(?:[\s.-]?[0-9]{2}){4})$/,
                }),
              }}
            />
            {errors.phoneNumber && (
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(255, 71, 71)",
                  fontSize: "10px",
                }}
              >
                Numéro de téléphone invalide
              </Typography>
            )}
            <FormControl
              fullWidth
              variant="standard"
              sx={{ marginBottom: "1rem" }}
            >
              <InputLabel id="subject-label">Objet de la demande *</InputLabel>
              <Select
                labelId="subject-label"
                label="Sujet"
                defaultValue=""
                {...register("subject", { required: true })}
              >
                <MenuItem value="Devis">Devis</MenuItem>
                <MenuItem value="Lorem ipsum dolor sit amet 2">
                  Lorem ipsum dolor sit amet 2
                </MenuItem>
                <MenuItem value="Autres">Autres</MenuItem>
              </Select>
              {errors.subject && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(255, 71, 71)",
                    fontSize: "10px",
                    marginTop: "8px",
                  }}
                >
                  Ce champ est obligatoire.
                </Typography>
              )}
            </FormControl>
            <TextField
              fullWidth
              label="Message *"
              variant="standard"
              multiline
              rows={4}
              InputProps={{
                ...register("message", {
                  required: true,
                }),
              }}
            />
            {errors.message && (
              <Typography
                variant="body2"
                sx={{
                  color: "rgb(255, 71, 71)",
                  fontSize: "10px",
                }}
              >
                Ce champ est obligatoire.
              </Typography>
            )}
            <Box
              sx={{
                textAlign: "right",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="contained"
                size="medium"
                onClick={handleSubmit(onSubmit)}
                sx={{
                  maxWidth: "200px",
                  // backgroundColor: "#486640",
                }}
              >
                Envoyer
              </Button>
            </Box>
          </form>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <ContactOthers />
        </TabPanel>
      </Paper>

      {/* Snackbar pour afficher la confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={handleSnackbarClose}
        >
          Votre message a été envoyé avec succès!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
