import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import IntroBackground from "../assets/IntroBackground";
import AccountImage from "../assets/Account";

const IntroSection = () => {
  return (
    <Box
      sx={{
        marginTop: "92px",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <IntroBackground />
      </Box>
      <Box
        sx={{
          padding: "6% 12%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2} sx={{ zIndex: 99, flexGrow: 1 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Typography sx={{ color: "#000000 87%" }} variant="h3">
                Start Algo Trading In Minutes
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginTop: "20px",
                  color: "#006064",
                }}
              >
                Our end-to-end platform enables you to create and manage algo
                funds with great flexibility
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ background: "#00838F", marginTop: "20px" }}
            >
              Sign Up For Free
            </Button>
          </Grid>
          <Grid item xs={6}>
            <AccountImage />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IntroSection;
