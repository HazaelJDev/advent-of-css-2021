import React from "react";
import styled from "styled-components";
import { Icons, Img } from "../assets/index";
import { Route, Routes, Link } from "react-router-dom";

const NavS = styled.nav`
  position: sticky;
  z-index: 5;
  top: 0;
  max-width: 100%;
  height: 80px;
  padding: 0px 40px;

  background-color: rgba(229, 228, 225, 0.4);
  backdrop-filter: blur(40px);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mobile`
    padding: 0px 16px;
  `};
`;

const OptionsS = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mobile`
       display: none; 
  `};
`;

const LinkS = styled(Link)`
  cursor: pointer;
`;

const LinkOut = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.navLinkOut};
`;

const ButtonConfigS = styled.button`
  border: none;
  padding: 8px;
  min-width: 48px;
  min-height: 48px;
  background: none;
  cursor: pointer;

  & svg {
    fill: ${({ theme }) => theme.iconMode};
  }
`;

const ButtonConfigMobileS = styled(ButtonConfigS)`
  display: none;

  & svg {
    fill: ${({ theme }) => theme.iconMode};
  }

  ${({ theme }) => theme.mobile`
       display: flex; 
       justify-content: center;
       align-items: center;
  `};
`;

const OptionsMobile = styled.section`
  position: fixed;
  top: 80px;
  right: 0px;
  width: fit-content;
  height: fit-content;
  padding: 8px 20px;
  background-color: rgba(229, 228, 225, 0.7);
  backdrop-filter: blur(40px);
  z-index: 5;

  & > * {
    margin-top: 16px;
  }
  ${({ theme }) => theme.mobile`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
  `};
`;

const LogoS = styled.img`
  width: fit-content;
  height: fit-content;
`;

const Nav = ({ theme, toggleFunc, menu, handleMenu }) => {
  return (
    <NavS>
      <LinkS to="/">
        <LogoS src={Img.Logo} alt="Logo of Advent of CSS 2021" />
      </LinkS>
      <OptionsS>
        <LinkOut href="https://www.adventofcss.com/" target="_blank">
          Go the official page
        </LinkOut>
        <ButtonConfigS aria-label="Button Dark Mode" onClick={toggleFunc}>
          {theme === "dark" ? <Icons.LightMode /> : <Icons.DarkMode />}
        </ButtonConfigS>
      </OptionsS>
      {/*Mobile menu*/}
      <ButtonConfigMobileS aria-label="Button Menu" onClick={handleMenu}>
        {menu === "menu" ? <Icons.Menu /> : <Icons.Close />}
      </ButtonConfigMobileS>
      <OptionsMobile
        style={menu === "close" ? { display: "flex" } : { display: "none" }}
      >
        <LinkOut href="https://www.adventofcss.com/" target="_blank">
          Go the official page
        </LinkOut>
        <ButtonConfigS aria-label="Button Dark Mode" onClick={toggleFunc}>
          {theme === "dark" ? <Icons.LightMode /> : <Icons.DarkMode />}
        </ButtonConfigS>
      </OptionsMobile>
    </NavS>
  );
};

export default Nav;
