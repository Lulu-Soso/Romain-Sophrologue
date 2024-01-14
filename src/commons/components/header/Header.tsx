import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  Stack,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import Logo from "../../../assets/img/logoOrizon.png";
import DrawerComp from "./DrawerComp";
import { Link, useLocation } from "react-router-dom";
import { PAGES } from "../../constants/pages";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { pathname } = useLocation();

  useEffect(() => {
    const path = PAGES.map((elt) => elt.link.split("/")[1]);

    if (pathname) {
      const index = path.findIndex((elt) => elt === pathname.split("/")[1]);
      if (index >= 0) setValue(index);
    }
  }, [pathname]);

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={Logo} alt="Orizon Logo" style={{ width: "30px" }} />
              <Typography variant="h5" sx={{ ml: 1 }}>
                ORIZON
              </Typography>
            </Stack>
          </Link>

          {isMatch ? (
            <DrawerComp />
          ) : (
            <Tabs
              value={value}
              onChange={(_, value) => setValue(value)}
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
                  sx={{ fontFamily: "Baumans", letterSpacing: 2 }}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
