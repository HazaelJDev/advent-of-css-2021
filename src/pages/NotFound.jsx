import React from "react";
import styled from "styled-components";
import { Img } from "../assets/index";

const NotFound404 = styled.main`
  max-width: 100%;
  height: calc(100vh - 80px);
  padding: 0px 80px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-template-rows: auto 100px;
`;

const Feedback = styled.section`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 13;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  height: fit-content;
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
  grid-column-start: 7;
  grid-column-end: 13;
`;

const Button = styled.button``;

export default NotFound = () => {
  return (
    <NotFound404>
      <Feedback>
        <Message>We couldn't find the address you requested</Message>
        <Illustration src={Img.Snowman} alt="Snowman sad" />
      </Feedback>
      <Button>Back to Home</Button>
    </NotFound404>
  );
};
