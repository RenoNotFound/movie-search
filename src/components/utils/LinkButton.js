import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ url, pageName }) => {
  console.log(url, pageName);
  return (
    <Button size="large" variant="contained">
      <Link underline="none" target="_blank" href={url}>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ flexGrow: 1 }}
          color="#fff"
        >
          {pageName}
        </Typography>
      </Link>
    </Button>
  );
};

export default LinkButton;
