import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight
} from "./pages/days/index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Theme and Global Style
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./styled/theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  
  @font-face {
    font-family: StrangeTales;
    src: url('/assets/StrangeTales.ttf'),
  }
  
  @font-face {
    font-family: SilverAge;
    src: url('/assets/SilverAge.ttf'),
  }

  html{
    --title: "Strange Tales";
    --header: "Silver Age Queens";
    --body: "Montserrat";

    --app-white-shade: #FFFEFA;
    --app-black-shade: #191919;
    --app-gray-shade: #E5E4E1;

    --primary-500: #E8234F;
    --primary-400: #F1576B;
    
    --secondary-500: #006E74;
    --secondary-400: #2AABA7;
    
    --tertiary-500: #2C3964;
    --tertiary-400: #5D6FA2;
    
    --border-tertiary-500: #3E8DAF;
    --border-tertiary-400: #6AB7CF;
    
    --social-media-facebook: #1877F2;
    --social-media-twitter: #1DA1F2;
    --social-media-youtube: #FF0000;
    --social-media-instagram: #C32AA3;
    --social-media-snapchat: #FFFC00;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.bodyText};
    max-width: 100%;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    transition: all 1.5s ease-out;
  }

  h1,h2, h3, h4, h5, h6 {
    margin:0;
    padding: 0;
  }
  
  #root > section, footer, nav, main, aside{
    transition: all 1.5s ease-out;
  }

  *{
    scrollbar-color: ${({ theme }) => theme.trackScrollBar} ${({ theme }) =>
  theme.ThumbScrollBar};
    scrollbar-width: 15px;
  }

  a{
    text-decoration: none;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.trackScrollBar};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.ThumbScrollBar};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.ThumbHoverScrollBar};
  }

  /* Buttons */
  ::-webkit-scrollbar-button{
    background: ${({ theme }) => theme.ThumbHoverScrollBar};
  }

  .App{
    max-width: 100%;
  }
`;

export default function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const [menu, setMenu] = useState("menu");

  const handleMenu = () => setMenu(menu === "menu" ? "close" : "menu");

  return (
    <ThemeProvider
      theme={theme === "light" ? lightTheme : darkTheme}
      className="App"
    >
      <GlobalStyle />
      <Navbar
        theme={theme}
        toggleFunc={toggleTheme}
        menu={menu}
        handleMenu={handleMenu}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/one" element={<One />} />
        <Route path="/day/two" element={<Two />} />
        <Route path="/day/three" element={<Three />} />
        <Route path="/day/four" element={<Four />} />
        <Route path="/day/five" element={<Five />} />
        <Route path="/day/six" element={<Six />} />
        <Route path="/day/seven" element={<Seven />} />
        <Route path="/day/eight" element={<Eight />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
