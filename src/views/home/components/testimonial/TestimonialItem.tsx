import React from "react";
import { Testimonial } from "../../../../types/Testimonial";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface TestimonialItemProps {
  item: Testimonial;
  width: string;
}

const TestimonialItem = ({ item, width }: TestimonialItemProps) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const height = isMd ? "250px" : isLg ? "200px" : "250px";

  return (
    <Box
      sx={{
        width: width,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: height,
        // backgroundColor: "lightgrey",
        // backgroundColor: "#A698A3",
        margin: "3rem 0",
      }}
    >
      <Container
        sx={{
          zIndex: 100,
        }}
      >
      <Box
        sx={{
          // width: "100%",
          py: 2,
          pb: 3,
          px: 4,
          color: "dark",
          textAlign: "center",
        }}
        whiteSpace="normal"
      >
        {/* <img
            src={item.image}
            alt={item.title}
            style={{
              width: "10%",
            }}
          /> */}
        <Typography sx={{ my: 3, display: "flex", alignItems: "center" }}>
          <img src={item.image} alt={item.title} style={{ width: "10%" }} />
          {/* <span style={{ marginLeft: "10px", marginRight: "10px" }}>{item.description}</span> */}
          <span>{item.description}</span>
          <img src={item.image2} alt={item.title} style={{ width: "10%" }} />
        </Typography>
        <Typography
        >
          {item.author}
        </Typography>
        <Typography
          sx={{
            py: 1,
          }}
        >
          {item.job}
        </Typography>
      </Box>
      </Container>
    </Box>
  );
};

export default TestimonialItem;
