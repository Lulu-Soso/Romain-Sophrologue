import React from "react";
import { Item } from "../../../../types/Item";
import { Button, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";

interface HeaderItemProps {
  item: Item;
  index: number;
  scrollTo: (index: number) => void;
}
const HeaderItem = ({ item, index, scrollTo }: HeaderItemProps) => {
  return (
    <Tooltip title={item.title}>
      <Button
        onClick={() => scrollTo(index)}
        component={NavLink}
        to={`/services/${index}`}
        variant="contained"
        sx={{
          width: "50px",
          minWidth: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backgroundColor: "#21b6ae",
          "&:hover": {
            backgroundColor: "#1c9e97",
          },
          "&.active": {
            backgroundColor: "#1c9e97",
          },
        }}
      >
        {item.icon}
      </Button>
    </Tooltip>
  );
};

export default HeaderItem;
