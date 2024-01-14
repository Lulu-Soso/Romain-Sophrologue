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
        backgroundColor: "lightgrey",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            color: "dark",
            position: "relative",
          }}
          whiteSpace="normal"
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100px",
              position: "absolute",
              top: "-25px",
              opacity: 0.5,
            }}
          />
          <Typography sx={{ width: "85%", mx: "auto" }}>
            {item.description}
          </Typography>
          <img
            src={item.image2}
            alt={item.title}
            style={{
              width: "100px",
              position: "absolute",
              bottom: "-25px",
              right: 0,
              opacity: 0.5,
            }}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography sx={{ width: "85%", mx: "auto" }}>
            {item.author}
          </Typography>
          <Typography sx={{ width: "85%", mx: "auto" }}>{item.job}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialItem;
