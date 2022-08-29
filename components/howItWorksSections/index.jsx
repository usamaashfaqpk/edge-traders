import React from "react";
import { Box, Grid } from "@mui/material";
import Divider from "../assets/VerticalDivider";
import TextWithDescription from "../TextWithDescription";
import ModalImage from "../assets/Modal";
import DoubleImage from "../assets/DoubleImage";
import SettingImage from "../assets/SettingImage";
import AccountImage from "../assets/Account";

const HowItWorksSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        paddingBottom: "85px",
      }}
    >
      <Box sx={{ position: "absolute", padding: "4% 12%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            zIndex: 99,
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={5}>
            <TextWithDescription
              button={false}
              heading="Choose from 85 included features"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus bibendum vivamus amet fames. Convallis lectus interdum elementum duis fringilla."
            />
          </Grid>
          <Grid item xs={5}>
            <ModalImage />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            zIndex: 99,
            flexGrow: 1,
            justifyContent: "space-between",
            marginTop: "75px",
          }}
        >
          <Grid item xs={5}>
            <DoubleImage />
          </Grid>
          <Grid item xs={5}>
            <TextWithDescription
              button={false}
              heading="Customize model parameters"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus bibendum vivamus amet fames. Convallis lectus interdum elementum duis fringilla."
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            zIndex: 99,
            flexGrow: 1,
            justifyContent: "space-between",
            marginTop: "75px",
          }}
        >
          <Grid item xs={5}>
            <TextWithDescription
              button={false}
              heading="Train your model on our compute"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus bibendum vivamus amet fames. Convallis lectus interdum elementum duis fringilla."
            />
          </Grid>
          <Grid item xs={5}>
            <SettingImage />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            zIndex: 99,
            flexGrow: 1,
            justifyContent: "space-between",
            marginTop: "75px",
          }}
        >
          <Grid item xs={5}>
            <AccountImage />
          </Grid>
          <Grid item xs={5}>
            <TextWithDescription
              button={true}
              heading="Customize model parameters"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus bibendum vivamus amet fames. Convallis lectus interdum elementum duis fringilla."
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Divider />
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
