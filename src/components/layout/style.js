import { AppBar, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

export const Content = styled("main")(() => ({
  flex: "1 1 auto",
}));

export const StyledContainer = styled(Container)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const HeaderStyled = styled(AppBar)(({ theme }) => ({
  background: "transparent",
  height: "128px",
  width: "100%",
  boxShadow: "none",
  padding: "30px 40px",
  position: "static",

  "& .MuiToolbar-root": {
    padding: 0,
    justifyContent: "space-between",
  },
}));

export const StyledRouterLink = styled(RouterLink)(() => ({
  color: "#282828",
  fontFamily: "Montserrat",
  textDecoration: "none",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "130%",
  "&:hover": {
    color: "gold",
  },
}));
