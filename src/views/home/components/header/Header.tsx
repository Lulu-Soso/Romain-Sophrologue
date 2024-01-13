import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import slide1 from "../../../../assets/img/slide1.jpg";
import CustomGridItem from "./CustomGridItem";
import { headerItems } from "../../../../commons/constants/headerItems";
import Logo from "../../../../assets/img/logoOrizon.png";

const Header = () => {
  return (
    <Box>
      <Stack
        sx={{
          height: "500px",
          backgroundImage: `url(${slide1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Container
          sx={{
            height: "70%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Stack
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img
              src={Logo}
              alt="Orizon Logo"
              style={{ width: "200px", marginRight: "20px" }}
            />

            <Box>
              <Typography variant="h5">Bienvenue sur</Typography>
              <Typography variant="h1">Orizon Sophrologie</Typography>
              <Typography variant="h2" sx={{ fontSize: "35px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <Container>
        <Box sx={{ mt: "-100px" }}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {headerItems.map((item, index) => (
              <CustomGridItem key={item.title} item={item} index={index} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
