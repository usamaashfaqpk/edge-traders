import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TextWithDescription = ({ button, heading, description }) => {
  return (
    <>
      <Typography variant="h3">{heading}</Typography>
      <Typography
        variant="h5"
        sx={{ marginTop: "20px", color: "rgba(0, 0, 0, 0.6)" }}
      >
        {description}
      </Typography>
      {button && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ background: "#00838F", marginTop: "20px" }}
        >
          Sign Up
        </Button>
      )}
    </>
  );
};

export default TextWithDescription;
