import React from "react";
import styled from "styled-components";

const HomeLayout = styled.main`
  max-width: 100%;
  max-height: 200vh;
`;

const Hero = styled.section`
  max-width: 100%;
  max-height: 100vh;
`;

const Calendar = styled.section`
  max-width: 100%;
  max-height: 100vh;
`;

const TitleHero = styled.h1`
  font-family: var(--header);
  font-size: 4.5rem;
  color: ${(theme) => theme.title};

  > span {
    font-family: var(--header);
    color: ${(theme) => theme.titleSpan};
    text-transform: lowercase;
  }
`;

export default Home = () => {
  return (
    <HomeLayout>
      <Hero></Hero>
      <Calendar></Calendar>
    </HomeLayout>
  );
};
