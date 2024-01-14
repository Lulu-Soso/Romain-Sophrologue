import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { headerItems } from "../../../../commons/constants/headerItems";
import HeaderItem from "./HeaderItem";

interface HeaderProps {
  scrollTo: (index: number) => void;
}

const Header = ({ scrollTo }: HeaderProps) => {
  return (
    <Box sx={{ position: "fixed", top: "75px", right: 0, width: "100%" }}>
      <Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          {headerItems.map((item, index) => (
            <HeaderItem
              key={item.title}
              item={item}
              index={index}
              scrollTo={scrollTo}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
