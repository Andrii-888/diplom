import { Container, Typography } from "@mui/material";
import React from "react";

const Page = ({ title, children }) => {
  return (
    <Container disableGutters maxWidth={false} sx={{ p: "0 30px" }}>
      <Typography variant="h1" sx={{ my: "80px" }}>
        {title}
      </Typography>

      {children}
    </Container>
  );
};

export default Page;
