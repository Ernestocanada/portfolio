import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ServiceCard from "./ServiceCard";
import design from "../image/web.png";
import coding from "../image/coding.png";
import cloud from "../image/cloud-hosting.png";
import hosting from "../image/hosting.png";
import marketing from "../image/online-marketing.png";
import marketing1 from "../image/marketing.png";
import Title from "./Title";

export default function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="container">
          <ServiceCard
            image={design}
            title={"WEB DESIGN AND DEVELOPMENT"}
            paragraph={
              "I design customized, professional and 100% personalized web pages. I develop institutional websites, ecommerce, search engine positioning and marketing through your website."
            }
          />

          <ServiceCard
            image={marketing}
            title={"E-COMMERCE"}
            paragraph={
              "I design the virtual store you need to sell online, with all the necessary tools to successfully sell your products online."
            }
          />

          <ServiceCard
            image={hosting}
            title={"HOSTING"}
            paragraph={
              "Host your website with guarantees. Enjoy maximum flexibility, dedication, customization and quality of the Hosting products. I am addicted to good hosting."
            }
          />
          <ServiceCard
            image={coding}
            title={"WEBSITE OPTIMIZATION"}
            paragraph={
              "Adapted to all devices: Mobiles, PCs and tablets. I scale the content for numerous breakpoints dictated by thousands of different devices and screen sizes."
            }
          />
          <ServiceCard
            image={marketing1}
            title={"MARKETING DIGITAL"}
            paragraph={
              "I take off your projects. I help you to build a relationship with your audience through the world of Internet and through the different communication channels."
            }
          />
          <ServiceCard
            image={cloud}
            title={"THE CLOUD THAT ADAPTS TO YOU"}
            paragraph={
              "Continue your business by uploading your apps to the cloud. I have a wide range of cloud solutions adapted to the needs and size of your business."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  margin-top: 5rem;
  z-index: 10;

  margin-top: 5rem;

  .container {
    padding-top: 40px;
    display: flex;

    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
