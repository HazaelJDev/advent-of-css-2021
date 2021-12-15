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

  ${({ theme }) => theme.mobile`
    max-width: 100%;
    max-height: fit-content;
    padding: 40px 16px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `};
`;

const Feedback = styled.section`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 13;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  height: auto;
  align-items: center;

  ${({ theme }) => theme.mobile`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-betwen;
    align-items: center;
    margin-bottom: 48px;
  `};
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

  ${({ theme }) => theme.mobile`
    font-size: 3rem;
    line-height: 60px;
    width: 100%;
    height: fit-content;
    text-align: center;
  `};
`;

const Illustration = styled.img`
  height: 60vh;
  grid-column-start: 7;
  grid-column-end: 13;

  ${({ theme }) => theme.mobile`
    width: 300px;
    height: 300px;
  `};
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
  text-align: center;
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

  ${({ theme }) => theme.mobile`
    font-size: 1.375rem;
    line-height: 25px;
    height :fit-content;

    &:hover,
    :focus {
      transform: rotate(1deg) scale(1.002);
    }
  `};
`;

const Moon = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  right: ${({ theme }) => theme.rightMoon404}px;
  top: ${({ theme }) => theme.topMoon404}px;
  border-radius: 50%;

  background: #fffefa;
  box-shadow: 0px 4px 224px 80px rgba(255, 254, 250, 0.57);
  transition: all 1.5s ease-out;

  ${({ theme }) => theme.mobile`
    width: 150px;
    height: 150px;
    right: ${({ theme }) => theme.rightMobileMoon404}px;
    top: ${({ theme }) => theme.topMobileMoon404}px;
  `};
`;

const NotFound = () => {
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

export default NotFound;
