import React from "react";
import { Grid, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
      <Grid item>
        <Typography variant="h5" component="p">
          Page not found!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
