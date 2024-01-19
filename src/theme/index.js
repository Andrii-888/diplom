import { createTheme } from "@mui/material";
import { pxToRem } from "../utils";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
    },
    h2: {
      fontWeight: 700,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
    },

    body1: {
      lineHeight: 32 / 24,
      fontSize: pxToRem(24),
    },
    body2: {
      lineHeight: 24 / 18,
      fontSize: pxToRem(18),
    },

    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(15),
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#339933",
    },
    text: {
      main: "#000",
    },
    common: { black: "#000", white: "#fff" },
    grey: {
      dark: "#2D2D2D",
      light: "#8B8B8B",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
      }),
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 700,
        },
      },
    },
  },
});
export default theme;
