import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Item } from "../../../../types/Item";
import { useNavigate } from "react-router-dom";

interface CustomGridItemProps {
  item: Item;
  index: number;
}
const CustomGridItem = ({ item, index }: CustomGridItemProps) => {
  const navigate = useNavigate();
  console.log(item.icon);
  return (
    <Grid item xs={3}>
      <Button
        onClick={() => navigate(`/services/${index}`)}
        variant="contained"
        sx={{
          width: "200px",
          height: "200px",
          margin: "0 auto",
          p: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "none",
          backgroundColor: "#21b6ae",
          "&:hover": {
            backgroundColor: "#1c9e97",
          },
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "20px !important" }}>
          {item.title}
        </Typography>

        <Box>
          <img
            src={item.icon}
            alt={`${item.title} Orizon`}
            style={{ width: "50px" }}
          />

          <Typography sx={{ textAlign: "center" }}>
            {item.description}
          </Typography>
        </Box>

        {/* <Stack
          sx={{ width: "100%" }}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Button size="small" variant="contained">
            En savoir plus
          </Button>
        </Stack> */}
      </Button>
    </Grid>
  );
};

export default CustomGridItem;
