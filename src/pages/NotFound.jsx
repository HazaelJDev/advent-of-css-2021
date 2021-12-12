import React from "react";
import styled from "styled-components";
import { Img } from "../assets/index";
import { Link } from "react-router-dom";

const NotFound404 = styled.main`
  max-width: 100%;
  max-height: calc(100vh - 80px);
  padding: 40px 80px 80px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-template-rows: auto 65px;
`;

const Feedback = styled.section`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 13;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  height: auto;
`;

const Message = styled.h1`
  grid-column-start: 1;
  grid-column-end: 7;

  font-family: var(--header);
  font-style: normal;
  font-weight: normal;
  font-size: 4.5rem;
  line-height: 120px;
  color: ${({ theme }) => theme.message404};
`;

const Illustration = styled.img`
  height: 60vh;
  grid-column-start: 7;
  grid-column-end: 13;
`;

const Button = styled(Link)`
  grid-row-start: 2;
  grid-column-start: 5;
  grid-column-end: 9;
  cursor: pointer;

  font-family: var(--header);
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 41px;
  background: ${({ theme }) => theme.message404};
  color: #fffefa;

  padding: 12px 80px;
  border: 2px dashed #fffefa;
  box-sizing: border-box;

  outline: 12px solid ${({ theme }) => theme.message404};

  &:hover,
  :focus {
    transform: rotate(1deg) scale(1.099);
    transition: all 0.5s ease-in-out;
  }
`;

const Moon = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  right: ${({ theme }) => theme.rightMoon404}px;
  top: -${({ theme }) => theme.topMoon404}px;
  border-radius: 50%;

  background: #fffefa;
  box-shadow: 0px 4px 224px 80px rgba(255, 254, 250, 0.57);
  transition: all 1.5s ease-out;
`;

export default NotFound = () => {
  return (
    <NotFound404>
      <Moon />
      <Feedback>
        <Message>We couldn't find the address you requested</Message>
        <Illustration src={Img.Snowman} alt="Snowman sad" />
      </Feedback>
      <Button to="/">Back to Home</Button>
    </NotFound404>
  );
};
