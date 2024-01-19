import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../constants";

const ToolsAndEquipment = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ p: "0 30px" }}>
      <Stack sx={{ flexDirection: "row" }}>
        <Link to={APP_ROUTES.MAIN}>
          <Button
            sx={{
              width: "142px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              alignItems: "center",
              color: "#282828",
              ml: "auto",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            Main Page
          </Button>
        </Link>
        <Link to={APP_ROUTES.CATEGORIES}>
          <Button
            sx={{
              width: "142px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              alignItems: "center",
              color: "#282828",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            Categories
          </Button>
        </Link>
        <Link to={APP_ROUTES.CATEGORIES}>
          <Button
            sx={{
              width: "242px",
              height: "36px",
              borderRadius: "8px",
              justifyContent: "center",
              alignItems: "center",
              color: "#282828",
              "&:hover": {
                color: "white",
                background: "gold",
              },
            }}
          >
            Tools and equipment
          </Button>
        </Link>
      </Stack>
      <Typography
        variant="h1"
        sx={{
          color: "#282828",
          fontFamily: "Montserrat",
          fontSize: "64px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "110%",
        }}
      >
        Tools and equipment
      </Typography>
    </Container>
  );
};

export default ToolsAndEquipment;
