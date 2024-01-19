import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/404.png";
import { Link as RouterLink } from "react-router-dom";
import { APP_ROUTES } from "../constants";

function NotFound() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          height: "250px",
          width: "100%",
          maxWidth: "700px",
        }}
      />
      <Typography
        variant="h1"
        sx={{
          color: "#282828",
          fontSize: { xs: "28px", md: "54px" },
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "110%",
        }}
      >
        Page Not Found
      </Typography>
      <Typography variant="p" sx={{ textAlign: "center", lineHeight: "30px" }}>
        We’re sorry, the page you requested could not be found.
        <br />
        Please go back to the homepage.
      </Typography>

      <Button
        variant="contained"
        sx={{
          gap: "10px",
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "20.8px",
          color: "#339933x",
          p: "16px 56px",
          "&:hover": {
            color: "white",
            backgroundColor: "gold",
          },
        }}
        disableRipple
        component={RouterLink}
        to={APP_ROUTES.MAIN}
      >
        Go Home
      </Button>
    </Stack>
  );
}

export default NotFound;
