import React from "react";
import styled from "styled-components";
import { MainLaout } from "../styles/Layout";
import Title from "../Components/Title";

import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";

export default function AboutPage() {
  return (
    <MainLaout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
      </AboutStyled>
    </MainLaout>
  );
}

const AboutStyled = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
`;
