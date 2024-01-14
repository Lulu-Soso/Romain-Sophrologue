import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { PAGES } from "../../constants/pages";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logoOrizon.png";

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            width: "250px",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
          }}
        >
          <Box
            sx={{
              my: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Orizon Logo" style={{ width: "100px" }} />

            <Typography variant="h4">ORIZON</Typography>
          </Box>

          {PAGES.map((page, index) => (
            <ListItemButton
              key={index}
              onClick={() => setOpen(false)}
              component={Link}
              to={page.link}
              sx={{ fontFamily: "Baumans", letterSpacing: 2 }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "inherit",
                }}
              >
                <Box sx={{ width: "40px", mr: 1 }}>{page.logo}</Box>
                <ListItemText>{page.title}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpen(!open)}
        sx={{ color: "white", ml: "auto" }}
      >
        <Menu color="inherit" />
      </IconButton>
    </>
  );
};

export default DrawerComp;
