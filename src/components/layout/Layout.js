import "../../App.css";
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
