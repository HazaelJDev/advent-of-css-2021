import React from "react";
import styled, { keyframes } from "styled-components";
import { Icons, Img, IconsC } from "../assets/index";
import { getIcons, days } from "../utils/routes-days";
import { Link } from "react-router-dom";

const HomeLayout = styled.main`
  max-width: 100%;
  height: fit-content;
  display: block;
`;

const Hero = styled.section`
  position: relative;
  max-width: 100%;
  max-height: calc(100vh - 80px);
  height: calc(100vh - 80px);
  padding: 60px 80px 0px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 4px;
  grid-template-rows: repeat(3, 1fr);

  z-index: 3;

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

const TitleHero = styled.h1`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 7;

  font-family: var(--header);
  font-style: normal;
  font-weight: normal;
  font-size: 4.5rem;
  line-height: 83px;
  -webkit-text-stroke: ${({ theme }) => theme.strokeHeroTitle}px #fffefa;
  -moz-text-stroke: ${({ theme }) => theme.strokeHeroTitle}px #fffefa;

  color: ${({ theme }) => theme.message404};

  ${({ theme }) => theme.mobile`
    width: 80%;
    font-size: 48px;
    line-height: 55px;
  `};
`;

const BodyHero = styled.h5`
  grid-row-start: 2;
  grid-column-start: 4;
  grid-column-end: 10;

  font-family: var(--body);
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.bodyText};

  ${({ theme }) => theme.mobile`
    width: 70%;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  `};
`;

const Up_down = keyframes`
  0% { top: 0px; transform: scale(0.5);}
  100% { top:64px; transform: scale(1);}
`;

const IndicatorChallenges = styled.section`
  grid-row-start: 3;
  grid-column-start: 5;
  grid-column-end: 9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg {
    position: relative;
    width: 64px;
    height: 64px;
    fill: ${({ theme }) => theme.bodyText};
    animation: ${Up_down} 2s ease-out infinite;
  }
`;

const TextIndicator = styled.h6`
  font-family: var(--body);
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 22px;
  color: ${({ theme }) => theme.message404};

  ${({ theme }) => theme.mobile`
    width: 80%;
    text-align: center;
  `};
`;

const Calendar = styled.section`
  max-width: 100%;
  height: fit-content;
  padding: 80px 80px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  grid-template-rows: 65px auto;

  ${({ theme }) => theme.mobile`
    max-width: 100%;
    max-height: fit-content;
    padding: 80px 20px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `};
`;

const TilteCalendar = styled.h2`
  grid-row-start: 1;
  grid-column-start: 4;
  grid-column-end: 10;

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
  transform: rotate(1deg);

  ${({ theme }) => theme.mobile`
    width: 90%;
    padding: 12px 16px;
    margin-bottom: 20px;
    font-size: 1.375rem;
    line-height: 25px;
    height: fit-content;
  `};
`;

const CalendarMatrix = styled.section`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 13;

  background: ${({ theme }) => theme.bgCalendarMatrix};
  width: 100%;
  height: fit-content;
  padding: 40px 0px 28px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: space-between;
  align-content: space-between;

  ${({ theme }) => theme.mobile`
      grid-template-columns: repeat(1, 100%);
  `};
`;

const CardDay = styled(Link)`
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.bodyBackground};
  color: ${({ theme }) => theme.bodyText};
  padding: 8px 16px;
  border: 4px solid ${({ theme }) => theme.borderCardDay};
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    font-family: var(--title);
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    line-height: 74px;
  }

  & > img {
    width: 64px;
    height: 64px;
  }
`;

const Moon = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  right: ${({ theme }) => theme.rightMoon}px;
  top: ${({ theme }) => theme.topMoon}px;
  border-radius: 50%;
  z-index: 1;

  background: #fffefa;
  box-shadow: 0px 4px 224px 80px rgba(255, 254, 250, 0.57);
  transition: all 1.5s ease-out;

  ${({ theme }) => theme.mobile`
    width: 150px;
    height: 150px;
    right: ${({ theme }) => theme.rightMobileMoon}px;
    top: ${({ theme }) => theme.topMobileMoon}px;
  `};
`;

const ImgBg = styled.section`
  background: url(${Img.HeroBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0px;
  z-index: 2;
  ${({ theme }) => theme.mobile`
    min-height: 120vh;
    background: url(${Img.HeroBgMobile});
  `};
`;

const Home = () => {
  const iconsChristmas = getIcons(IconsC);
  return (
    <HomeLayout>
      <ImgBg />
      <Moon />
      <Hero>
        <TitleHero>24 CSS Challenges for the Season</TitleHero>
        <BodyHero>
          I made the challenges in React JS with Styled components.
        </BodyHero>
        <IndicatorChallenges>
          <TextIndicator>
            See the implementation of the challenges below
          </TextIndicator>
          <Icons.ArrowDown />
        </IndicatorChallenges>
      </Hero>
      <Calendar>
        <TilteCalendar>Challenges calendar</TilteCalendar>
        <CalendarMatrix>
          {days.map((day, index) => {
            return (
              <CardDay to={`/day/${day}`} key={`CarDay-${index + 1}`}>
                <img src={iconsChristmas[index]} alt={`Day ${index + 1}`} />
                <h3>{index + 1}</h3>
              </CardDay>
            );
          })}
        </CalendarMatrix>
      </Calendar>
    </HomeLayout>
  );
};

export default Home;
