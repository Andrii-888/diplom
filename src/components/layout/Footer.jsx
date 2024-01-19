import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <Box component="footer" sx={{ p: "25px 40px 80px 40px" }}>
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
        Contact
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ m: "40px 0 0 40px" }}
      >
        <Grid item xs={12} md={7}>
          <Paper
            elevation={24}
            sx={{
              maxWidth: { xs: "100%", md: "780px" },

              height: "150px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                p: "32px 0 0 32px",
                color: "#8B8B8B",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "26px",
              }}
            >
              Phone
            </Typography>
            <Typography
              sx={{
                m: "16px 0 0 32px",
                color: "#282828",
                fontSize: { xs: "20px", md: "40px" },
                fontWeight: 600,
                alignSelf: "stretch",
                fontFamily: "Montserrat",
              }}
            >
              +49 999 999 99 99
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={24}
            sx={{
              maxWidth: { xs: "100%", md: "548px" },
              height: "150px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                color: "#8B8B8B",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "130%",
                p: "32px 0 0 32px",
              }}
            >
              Socials
            </Typography>
            <Box
              sx={{
                my: 3,
                m: "16px 0px 32px 32px",
                "& svg": {
                  height: "43px",
                  width: "43px",
                  color: "#282828",
                  cursor: "pointer",
                },
                "& svg:hover": {
                  color: "goldenrod",
                  transform: "translateX(5px)",
                  transition: "all 400ms",
                },
              }}
            >
              <InstagramIcon style={{ gap: "16px" }} />
              <WhatsAppIcon />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={24}
            sx={{
              gap: "16px",
              maxWidth: { xs: "100%", md: "780px" },
              height: "194px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                p: "32px 0 0 32px",
                color: "#8B8B8B",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                p: "0 0 32px 32px",
                color: "#282828",
                fontSize: { xs: "20px", md: "35px" },
                fontWeight: "400",
                fontStyle: "normal",
                fontFamily: "Montserrat",
              }}
            >
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper
            elevation={24}
            sx={{
              maxWidth: { xs: "100%", md: "548px" },
              height: "194px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography
              sx={{
                color: "#8B8B8B",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "130%",
                p: "32px 0 0 32px",
                gap: "32px",
              }}
            >
              Working Hours
            </Typography>
            <Typography
              sx={{
                color: "#282828",
                fontSize: { xs: "20px", md: "40px" },
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "110%",
                p: "0 0 32px 32px",
              }}
            >
              24 hours a day
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <div style={{ width: "100%", padding: "32px 0 0 0" }}>
        <div>
          <iframe
            width="100%"
            height="350px"
            src="https://maps.google.com/maps?width=100%25&amp;height=350px&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010%E2%80%AF785,%20Berlin,%20Deutschland+(Tel-Ran)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </Box>
  );
}

export default Footer;
