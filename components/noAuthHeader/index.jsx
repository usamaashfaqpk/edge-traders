import * as React from "react";
import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import Logo from "../assets/Logo";
import EdgeTrad3r from "../assets/EdgrTrad3r";

const NoAuthHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          padding: "0px 4%",
          boxShadow: "none",
          height: "92px",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Logo />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <EdgeTrad3r />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "200px",
            }}
          >
            <Button color="inherit">Login</Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ background: "#00838F" }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NoAuthHeader;
