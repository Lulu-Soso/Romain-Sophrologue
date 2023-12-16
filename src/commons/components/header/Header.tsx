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
import { TripOrigin } from "@mui/icons-material";
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
      setValue(index);
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
              <TripOrigin />
              <Typography sx={{ ml: 1 }}>oriZon</Typography>
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
