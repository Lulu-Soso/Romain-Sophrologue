import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  Stack,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Spa } from "@mui/icons-material";
import DrawerComp from "./DrawerComp";
import { Link } from "react-router-dom";
import { PAGES } from "../../constants/pages";

const Header = () => {
  const [value, setValue] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Spa />
            <Typography sx={{ ml: 1 }}>Horizon</Typography>
          </Stack>
        </Link>

        {isMatch ? (
          <DrawerComp />
        ) : (
          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            textColor="inherit"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "white",
              },
            }}
            sx={{ ml: "auto" }}
          >
            {PAGES.map((page, index) => (
              <Tab
                key={index}
                label={page.title}
                component={Link}
                to={page.link}
              />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
