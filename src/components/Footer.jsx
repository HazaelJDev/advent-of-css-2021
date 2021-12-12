import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";

const FooterS = styled.footer`
  background: ${({ theme }) => theme.bodyBackground};
  max-width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px 20px;

  ${({ theme }) => theme.mobile`
        padding: 32px 16px 16px;
    `};
`;

const Text = styled.h6`
  width: 100%;
  height: fit-content;

  font-family: var(--body);
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.15px;

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.bodyText};

  margin-bottom: 16px;

  & span {
    color: ${({ theme }) => theme.contactUser};
  }

  ${({ theme }) => theme.mobile`
        /* Body 2 */
        font-family: var(--body);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.25px;
    `};
`;

const Contact = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & a > svg {
    margin: 0px 16px;
    width: 32px;
    height: 32px;
    fill: ${({ theme }) => theme.bodyText};
    cursor: pointer;
  }
`;

const Footer = (props) => {
  return (
    <FooterS>
      <Text>
        By Hazael Jiménez — <span>@hazajdev</span>
      </Text>
      <Text>&copy; 2021</Text>
      <Contact>
        <a href="https://twitter.com/hazajdev" target="_blank">
          <Icons.SocialMedia.Twitter />
        </a>
        <a href="https://www.instagram.com/hazadev/" target="_blank">
          <Icons.SocialMedia.Instagram />
        </a>
      </Contact>
    </FooterS>
  );
};

export default Footer;
