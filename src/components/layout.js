import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "@/styles/theme";
import NavBar from "./navigation/nav-bar";
import SplashScreen from "./splash-screen";
import { GlobalStyles } from "@/styles/globalStyles";
import Footer from "./footer/footer";

const LayoutContainer = styled.main`
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryFontColor};
  .layout-content {
    height: calc(100vh - 80px);
    width: 100%;
    margin: 0 auto;
    max-width: 1920px;
  }
`;
function MainLayout({ onClick = () => {}, splash, children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <LayoutContainer className="main-layout" onClick={onClick}>
        <NavBar />
        {splash && <SplashScreen />}
        <div className="layout-content">
          {children}
          <Footer />
        </div>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default MainLayout;
