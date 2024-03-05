import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "@/styles/theme";
import NavBar from "./navigation/nav-bar";
import SplashScreen from "./splash-screen";
import CustomCursor from "./CustomCursor";
import { GlobalStyles } from "@/styles/globalStyles";
import Footer from "./footer/footer";
import RoomSearch from "./room-search/room-search";

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
function MainLayout({
  onClick = () => {},
  splash,
  roomSearch = true,
  children,
}) {
  const [openCalender, setOpenCalender] = useState(false);
  const [openGuestsNumber, setOpenGuestsNumber] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <CustomCursor />
      <GlobalStyles />
      <LayoutContainer
        className="main-layout"
        onClick={
          openCalender || openGuestsNumber
            ? () => {
                setOpenCalender(false);
                onClick();
                setOpenGuestsNumber(false);
              }
            : () => {
                onClick();
              }
        }
      >
        <NavBar />
        {roomSearch && (
          <RoomSearch
            openCalender={openCalender}
            openGuestsNumber={openGuestsNumber}
            setOpenCalender={() =>
              setOpenCalender((prevState) => !prevState)
            }
            setOpenGuestsNumber={() =>
              setOpenGuestsNumber((prevState) => !prevState)
            }
          />
        )}
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
