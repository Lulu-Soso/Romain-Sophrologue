import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./commons/components/header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  const [appBarHeight, setAppBarHeight] = useState(0);
  const muiPadding = 16;

  useEffect(() => {
    const appBar = document.querySelector(".MuiAppBar-root");
    if (appBar) {
      const height = appBar.getBoundingClientRect().height;
      setAppBarHeight(height);
    }
  }, []);

  return (
    <div>
      <Header />

      <Container sx={{ mt: `${appBarHeight + muiPadding}px ` }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
