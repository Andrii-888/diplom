import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Content, StyledContainer } from "./style";

function Layout() {
  return (
    <StyledContainer disableGutters maxWidth={false}>
      <Header />

      <Content>
        <Outlet />
      </Content>
      
      <Footer />
    </StyledContainer>
  );
}

export default Layout;
