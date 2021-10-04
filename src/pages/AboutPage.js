import React from "react";
import styled from "styled-components";
import { MainLaout } from "../styles/Layout";
import Title from "../Components/Title";

import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import ParticlesBackground from "../Components/Particules";

export default function AboutPage() {
  return (
    <MainLaout>
      <ParticlesBackground />
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
