import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Search for Movies
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
