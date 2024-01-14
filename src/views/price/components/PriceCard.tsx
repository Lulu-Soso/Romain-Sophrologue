import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface PriceCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  details: string[];
  offer: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ image, title, price, details, offer }) => {
  return (
    <Card sx={{ maxWidth: "100%", borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent sx={{ height: "350px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {price}
        </Typography>
        <Box sx={{ m: "1rem 0", textAlign: "left", padding: "1rem"}}>
          {details.map((detail, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {detail}
            </Typography>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {offer}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
