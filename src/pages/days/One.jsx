import React from "react";
import styled, { keyframes } from "styled-components";

const giro = keyframes`
  100% {
    transform: rotate(180deg);
  }
`;

const OneLayout = styled.main`
  display: grid;
  place-items: center;
  max-width: 100%;
  min-height: calc(100vh - 80px);
`;

const Circular = styled.section`
  width: 400px;
  height: 400px;
  background-color: blue;
  position: relative;
`;

const Inner = styled.section`
  z-index: 6;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(
    71.4% 71.4% at 51.7% 28.6%,
    #3a393f 0%,
    #191919 100%
  );
  box-shadow: inset 0px 0px 114px rgba(17, 17, 17, 0.45);
  border-radius: 100%;
`;

const Display = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-size: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Input = styled.input`
  z-index: 10;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  width: 100px;
  background: none;
  border: 0;
  outline: none;
  color: #f9f9f9;
  text-shadow: 0px 4px 4px rgba(17, 17, 17, 0.25);
`;

const Outer = styled.section``;

const Bar = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 100%;
  clip: rect(0px, 100px, 100px, 50px);

  & .right {
    transform: rotate(180deg);
    z-index: 3;
  }

  & .left {
    transform: rotate(180deg);
    z-index: 3;
  }
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  clip: rect(0px, 50px, 100px, 0px);
  background: #4158d0;

  & .right {
    animation: ${giro} 4s linear both;
    animation-delay: 4s;
  }

  & .left {
    z-index: 1;
    animation: ${giro} 4s linear both;
  }
`;

const One = () => {
  return (
    <OneLayout>
      <Circular>
        <Inner>
          <Display>
            <Input type="number" min="00" max="60" name="minuts" requeried />
            <p>:</p>
            <Input type="number" min="00" max="60" name="seconds" requeried />
          </Display>
        </Inner>
        <Outer>
          <Bar className="left">
            <Progress className="left" />
          </Bar>
          <Bar className="right">
            <Progress className="right" />
          </Bar>
        </Outer>
      </Circular>
    </OneLayout>
  );
};

export default One;
